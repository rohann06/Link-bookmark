"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

interface LinkDetailsProps {
  title: string;
  image: string;
  url: string;
  description: string;
}

const LinkDetail = ({ title, image, url, description }: LinkDetailsProps) => {
  const [isSave, satIsSave] = useState(false);
  return (
    <div className=" flex flex-col my-10 mx-40">
      <div className=" flex items-center justify-between">
        <h1 className=" text-3xl font-semibold font-Montserrat mb-8">
          {title}
        </h1>
        <div
          onClick={() => satIsSave(!isSave)}
          className={` bg-white text-3xl cursor-pointer ${
            isSave && "text-blue-500"
          }`}
        >
          <BsFillBookmarkFill />
        </div>
      </div>
      <div className=" md:h-[500px] md:w-full rounded-2xl overflow-hidden">
        <Image
          className=" h-full w-full "
          height={400}
          width={400}
          src={image}
          alt="Image"
        />
      </div>

      <p className=" text-xl my-2 md:my-10 font-Montserrat">{description}</p>
      <a href={url}>
        <div className=" font-semibold flex items-center text-xl hover:text-blue-500 cursor-pointer">
          Live Demo <FiExternalLink />
        </div>
      </a>
    </div>
  );
};

export default LinkDetail;
