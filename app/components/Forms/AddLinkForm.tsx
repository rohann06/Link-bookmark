"use client";
import React, { ChangeEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { supabase } from "@/utils/supabse";

const AddLinkForm = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const authorId = session?.user?.email;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  var filename = imageUrl.replace(/^.*[\\\/]/, '')
  const image = `https://xsydwnoephsnngmhirri.supabase.co/storage/v1/object/public/link_images/public/${filename}`;
  console.log("filename", filename)
  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("link_images")
      .upload("public/" + file?.name, file as File);

    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };

  const handleSubmitLink = (e: React.FormEvent) => {
    e.preventDefault();

    const data = { title, description, url, imageUrl:image , authorId };

    try {
      axios
        .post("api/postLink", data)
        .then((response) => {
          console.log("response", response);
          toast.success("Blog Posted successfully");
        })
        .catch((error) => {
          console.log("SubmitError", error.response.data);
          toast.error("Oops! Something went wrong");
        })
        .finally(() => {
          router.push("/");
        });
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className=" bg-white rounded-2xl px-5 py-10 mt-20 mx-80">
      <h1 className=" text-center text-xl font-Montserrat font-semibold py-5 bg-white">
        Add Your Link
      </h1>
      <form onSubmit={handleSubmitLink} className=" bg-white">
        <div className=" w-full bg-white">
          <p className=" bg-white mb-2 font-Montserrat ">
            Link Title <span className=" text-red-500 bg-white">*</span>
          </p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" bg-white border px-3 py-2 w-full rounded-xl "
          />
        </div>
        <div className=" w-full bg-white my-7">
          <p className=" bg-white mb-2 font-Montserrat ">
            Link Description <span className=" text-red-500 bg-white">*</span>
          </p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" bg-white border px-3 py-2 w-full rounded-xl "
          />
        </div>
        <div className=" w-full bg-white">
          <p className=" bg-white mb-2 font-Montserrat ">
            Add URL <span className=" text-red-500 bg-white">*</span>
          </p>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className=" bg-white border px-3 py-2 w-full rounded-xl "
          />
        </div>
        <div className=" w-full bg-white my-7">
          <p className=" bg-white mb-2 font-Montserrat ">
            Link Image <span className=" text-red-500 bg-white">*</span>
          </p>
          <input
            type="file"
            value={imageUrl}
            onChange={(e) => {
              handleUploadImage(e);
              setImageUrl(e.target.value);
            }}
            className=" bg-white border px-3 py-2 w-full rounded-xl "
          />
        </div>

        <div className=" bg-white flex justify-center items-center ">
          <button
            type="submit"
            className=" bg-blue-600 text-center px-60 py-2 text-white font-Montserrat rounded-xl"
          >
            Add Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLinkForm;
