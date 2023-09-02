"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

interface CardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const Card = ({ title, description, url, imageUrl }: CardProps) => {
  const [isSave, satIsSave] = useState(false);
  console.log("desceription", description);

  const handleSave = async () => {
    alert("saved");
  };

  return (
    <div className=" bg-white w-fit p-2 rounded-2xl">
      <div className=" md:h-52 md:w-96 rounded-2xl overflow-hidden">
        <Image
          className=" h-full w-full "
          height={400}
          width={400}
          src={imageUrl}
          alt="Image"
        />
      </div>
      <div className=" py-5 px-2 bg-white">
        <p className=" text-2xl font-Montserrat font-semibold bg-white">
          {title}
        </p>
        <p className=" bg-white my-2 md:my-4 font-Montserrat">{description}</p>
        <div className=" flex justify-between items-center bg-white">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className=" bg-white flex items-center text-lg hover:text-blue-500 cursor-pointer">
              Live Demo <FiExternalLink />
            </div>
          </a>

          <div
            onClick={() => {
              satIsSave(!isSave);
            }}
            className={` bg-white text-2xl cursor-pointer ${
              isSave && "text-blue-500"
            }`}
          >
            <BsFillBookmarkFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
