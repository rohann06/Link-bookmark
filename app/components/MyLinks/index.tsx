"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { useSession } from "next-auth/react";

interface MyLink {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  author: {
    email: string;
  };
}

const MyLink = () => {
  const { data: session } = useSession();
  const [myLinks, setMyLinks] = useState<MyLink[]>([]);

  const getAllMyLinks = async () => {
    try {
      const allMyLinks = await axios.get("api/links");
      console.log("MyLink data", allMyLinks?.data);
      setMyLinks(allMyLinks?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllMyLinks();
  }, []);

  return (
    <div className=" md:my-20 grid gap-11 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {myLinks?.map((link) => (
        <>
          {session?.user?.email === link?.author?.email && (
            <Card
              key={link?.id}
              title={link?.title}
              description={link?.description}
              url={link?.url}
              imageUrl={link?.imageUrl}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default MyLink;
