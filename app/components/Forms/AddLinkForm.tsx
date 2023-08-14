"use client";
import React from "react";

const AddLinkForm = () => {
  return (
    <div className=" bg-white rounded-2xl px-5 py-10 mt-20 mx-80">
      <h1 className=" text-center text-xl font-Montserrat font-semibold py-5 bg-white">
        Add Your Link
      </h1>
      <form className=" bg-white">
        <div className=" w-full bg-white">
          <p className=" bg-white mb-2 font-Montserrat ">Link Title</p>
          <input type="text" className=" bg-white border px-3 py-2 w-full rounded-xl " />
        </div>
        <div className=" w-full bg-white my-7">
          <p className=" bg-white mb-2 font-Montserrat ">Link Description</p>
          <input type="text" className=" bg-white border px-3 py-2 w-full rounded-xl " />
        </div>
        <div className=" w-full bg-white">
          <p className=" bg-white mb-2 font-Montserrat ">Add URL</p>
          <input type="text" className=" bg-white border px-3 py-2 w-full rounded-xl " />
        </div>
        <div className=" w-full bg-white my-7">
          <p className=" bg-white mb-2 font-Montserrat ">Link Image</p>
          <input type="file" className=" bg-white border px-3 py-2 w-full rounded-xl " />
        </div>

        <div className=" bg-white flex justify-center items-center ">
            <button type="submit" className=" bg-blue-600 text-center px-60 py-2 text-white font-Montserrat rounded-xl">Add Link</button>
        </div>
      </form>
    </div>
  );
};

export default AddLinkForm;
