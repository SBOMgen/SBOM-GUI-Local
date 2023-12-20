import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const notify = () => toast.success("Path has been recieved!");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filePath: inputValue }),
      });
      notify();
      console.log(inputValue);
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
        <div>
          <input
            className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:text-white placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder="Input path of folder or zip file"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save
        </button>
      </form>
      <Link to="/runs">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Go to Runs
        </button>
      </Link>
    </>
  );
};

export default FormComponent;
