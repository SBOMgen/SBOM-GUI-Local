import React from "react";
import { Navigate, Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

import DataTable from "./Table";

import { useParams } from "react-router-dom";
const Result = () => {
  const [sbom, setsbom] = useState(null);

  const { id } = useParams();
  console.log(id);
  const options = {
    method: "GET",
    url: `http://127.0.0.1:4000/reports/` + `${id}`,
  };
  React.useEffect(() => {
    axios(options)
      .then(async (response) => {
        const w1 = await response.data;
        console.log(w1);
        console.log("j");
        setsbom(w1.data);
        console.log(sbom);
      })
      .catch((error) => {
        console.error(
          "Error fetching repositories:",
          error.response ? error.response.data : error.message
        );
      });

    // console.log(sbom);
  }, [id]);

  return (
    <div>
      {sbom ? <DataTable advisories={sbom.vulnerabilities} /> : ""}

      {/* <h1 className="text-6xl font-bold">VER</h1>
        <div className="max-h-[1000px] overflow-scroll no-scrollbar border-4 m-9"> }
        {temp != undefined && temp.map((item, k) => {
          let val=[]
         val.push(item["bom-ref"],item.recommendation,item.source.name,item.source.url)
         setglist({val}) 

         return (

           <Link key={k} to={${item.source.url}}>
           <div  className="mx-auto max-w-[600px] border-2 rounded-xl m-10 p-16 text-center gap-10 font-bold" >
              <div className="flex justify-between">
                <div >Status:{item.ratings[0].severity}</div>
className={color_picker(item.ratings[0].score)}
                <div>{item["bom-ref"]}</div>
              </div>

              <div className="flex mt-2  justify-between">
              <div>{item.recommendation}</div>
              <div>{item.source.name}</div>
              
              </div>
              <div><a href={item.source.url}  className="text-blue-600">{item.source.url}</a></div>

              
            </div>
           </Link> 
          )
        })}
      </div> */}
    </div>
  );
};

export default Result;
