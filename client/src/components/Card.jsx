import React from "react";
import tick from "../img/yes.png";

const Card = ({ title, date, id }) => {
  return (
    <div className="flex flex-col py-6 mt-[2%]">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3  mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white items-center flex justify-center">
          <img
            src={tick}
            alt="success"
            className="rounded-full object-cover h-[150px]"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-xl text-gray-800 font-bold">{title}</p>
            <div className="bg-green-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              {date}
            </div>
          </div>
          {/* <h5 className=" text-gray-800 md:text-sm text-xs md:p-8 ">
            <strong>Commit-id: </strong>
            <i>{com_id}</i> by <strong>{triggering}</strong>
          </h5> */}
          {/* <p className="text-gray-500 font-medium md:block ml-44">
            Started on{" "}
            {new Date(run).getDate() +
              "/" +
              (new Date(run).getMonth() + 1) +
              "/" +
              new Date(run).getFullYear()}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
