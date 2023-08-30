"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useSession } from "next-auth/react";

const details = () => {
  const [isSave, satIsSave] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {session && session?.user && (
        <div className=" flex flex-col my-10 mx-40">
          <div className=" flex items-center justify-between">
            <h1 className=" text-3xl font-semibold font-Montserrat mb-8">
              Foodie website
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
              src={"/image.png"}
              alt="Image"
            />
          </div>

          <p className=" text-xl my-2 md:my-10 font-Montserrat">
            It's a one of my personal website
          </p>
          <div className=" font-semibold flex items-center text-xl hover:text-blue-500 cursor-pointer">
            Live Demo <FiExternalLink />
          </div>
        </div>
      )}
    </>
  );
};

export default details;
