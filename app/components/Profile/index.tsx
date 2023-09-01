"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { IoPersonSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const Profile = () => {
  const { data: session } = useSession();
  const image: string = session?.user?.image || "";
  return (
    <div className=" bg-black p-[3px] md:p-[5px] rounded-full pl-[8px] md:pl-[10px] cursor-pointer">
      {image ? (
        <div className=" flex flex-row-reverse items-center gap-2 md:gap-3 rounded-full bg-black ">
          <div className=" rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
            <img src={image} alt="Myimg" className=" h-full w-full " />
          </div>
          <div className=" text-white text-2xl ">
            <RxHamburgerMenu className="bg-black" />
          </div>
        </div>
      ) : (
        <>
          <div className=" flex flex-row-reverse items-center gap-3 rounded-full bg-black ">
            <div className=" p-[12px]  rounded-full bg-gray-700 text-xl">
              <IoPersonSharp className=" bg-gray-700 text-white " />
            </div>s
            <div className=" text-white text-2xl ">
              <RxHamburgerMenu className="bg-black" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
