const { exec } = require('child_process');
const express = require('express');

const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors())
app.use(express.json());


const runSbomGenerator = (path) => {
    const sbomCommand = `sbomgentwo -p ${path} -f json --vul`;

    exec(sbomCommand, (error, stdout, stderr) => {
        console.log(stdout);
    });
};

app.post('/upload', (req, res) => {
    const filePath = req.body.filePath;
    if (!filePath) {
        return res.status(400).json({ error: 'File path is required.' });
    }
    console.log(filePath)
    runSbomGenerator(filePath);
    res.json({ message: 'File path received successfully!' });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
