"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useSession } from "next-auth/react";
import axios from "axios";
import LinkDetail from "@/app/components/linkDetail";

type URL = {
  params: {
    slug: string;
  };
};

interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const linkDetails = (id: URL) => {
  const authorId = id.params.slug;
  const [linksDetails, setLinksDetails] = useState<Link[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  //Fetch  posts
  const fetchDetails = async () => {
    setIsLoading(true);
    const response = await axios.get(`/api/links`);
    console.log("response", response?.data);
    setLinksDetails(response?.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDetails();
  }, [authorId]);

  return (
    <>
      {isLoading ? (
        <div className=" flex justify-center items-center mt-40">
          <p className=" text-lg md:text-2xl font-Montserrat animate-pulse">
            Loading....
          </p>
        </div>
      ) : (
        <>
          <>
            {linksDetails.map((linksDetail) => {
              return (
                <>
                  <LinkDetail
                    title={linksDetail?.title}
                    image={linksDetail?.imageUrl}
                    url={linksDetail?.url}
                    description={linksDetail?.description}
                  />
                </>
              );
            })}
          </>
        </>
      )}
    </>
  );
};

export default linkDetails;
