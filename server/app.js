import { exec } from "child_process";
import express from "express";
import { connectDB } from "./database.js";
import cors from "cors";
import fs from "fs";
import path from "path";
const app = express();
const PORT = 4000;
export const con = connectDB();
app.use(cors());
app.use(express.json());

const runSbomGenerator = (pathh) => {
  const sbomCommand = `sbomgentwo -p ${pathh} -f json --vul`;

  exec(sbomCommand, (error, stdout, stderr) => {
    console.log(stdout);
    const sourceFolderPath = path.resolve(process.cwd(), "./reports");
    const destinationFolderPath = path.resolve(process.cwd(), "./reports");
    const originalFileName = "depscan.html";
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "");
    const newFileName = `report_${timestamp}.html`;
    const sourceFilePath = path.join(sourceFolderPath, originalFileName);
    const destinationFilePath = path.join(destinationFolderPath, newFileName);
    console.log(fs.existsSync(sourceFilePath));
    fs.renameSync(sourceFilePath, destinationFilePath);

    // Insert the new path into MySQL database
    const insertQuery = `INSERT INTO data (html,uploaded) VALUES ('${destinationFilePath}', '${new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")}')`;
    con.query(insertQuery, (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
      } else {
        console.log("Data inserted successfully. Row ID:", results.insertId);
      }
    });
  });
};

app.post("/upload", (req, res) => {
  const filePath = req.body.filePath;
  if (!filePath) {
    return res.status(400).json({ error: "File path is required." });
  }
  console.log(filePath);
  runSbomGenerator(filePath);
  res.json({ message: "File path received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/reports", (req, res) => {
  con.query("SELECT * FROM data ORDER BY uploaded DESC", (err, results) => {
    if (err) {
      console.error("Error retrieving data:", err);
    } else {
      return res.status(200).json({
        success: true,
        data: results,
      });
    }
  });
});

app.get("/reports/:id", (req, res) => {
  const id = req.params.id;
  con.query(`SELECT html FROM data WHERE id = ${id}`, (err, results) => {
    if (err) {
      console.error("Error retrieving data:", err);
    } else {
      // console.log(results[0]["html"]);
      const htmlPath = results[0]["html"];
      fs.readFile(htmlPath, "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading HTML file:", err);
          res.status(500).send("Internal Server Error");
        } else {
          // Send the HTML content to the frontend
          return res.status(200).json({
            success: true,
            data: data
              .replace(/\n/g, "")
              .replace("&quot;", '"')
              .replace(/\\/g, ""),
          });
        }
      });
      // return res.status(200).json({
      //   success: true,
      //   data: results,
      // });
    }
  });
});
