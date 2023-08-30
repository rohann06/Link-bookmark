"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const HomePage = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const getAllLinks = async () => {
    try {
      const allLinks = await axios.get("api/links");
      console.log("Link data", allLinks?.data);
      setLinks(allLinks?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <div className=" md:my-20 grid gap-11 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {links?.map((link) => (
        <>
          <Card
            key={link?.id}
            title={link?.title}
            description={link?.description}
            url={link?.url}
            imageUrl={link?.imageUrl}
          />
        </>
      ))}
    </div>
  );
};

export default HomePage;
