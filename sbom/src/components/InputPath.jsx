import { useState } from "react";
import React from 'react';

const InputPath = ()=>{
    const [folderPath, setFolderPath] = useState("");
    return(
        <div>
            <input className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:text-white placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder="Input Path"  type="text"/>
        </div>
    )
};
export default InputPath;