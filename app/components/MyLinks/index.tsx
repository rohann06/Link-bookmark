"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { useSession } from "next-auth/react";
import { data } from "autoprefixer";

interface User {
  email: string;
  id: string;
  image: string;
  name: string;
  userLinks: Link[]; // Update the type here to match your schema
}

interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const MyLink = () => {
  const { data: session } = useSession();
  const [myLinks, setMyLinks] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMyLinks = async () => {
    try {
      setIsLoading(true);
      const allMyLinks = await axios.get("api/myLinks");
      console.log("MyLink data", allMyLinks?.data);
      setMyLinks(allMyLinks?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllMyLinks();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className=" flex justify-center items-center mt-40">
          <p className=" text-lg md:text-2xl font-Montserrat animate-pulse">
            Loading....
          </p>
        </div>
      ) : (
        <div className=" md:my-20 grid gap-11 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {myLinks?.map((user: User) => (
            <div key={user.id}>
              {user?.userLinks?.map((link: Link) => (
                <div key={link?.id}>
                  <Card
                    key={link?.id}
                    title={link?.title}
                    description={link?.description}
                    url={link?.url}
                    imageUrl={link?.imageUrl}
                    id={link?.id}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyLink;

{
  /* {session?.user?.email === link?.author?.email && (
                

                
              )} */
}
