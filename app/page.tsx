import React, { useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

export default function Home() {
  // const getAllLinks = async () => {
  //   try {
  //     const allLinks = await axios.get("api/blogs");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <main>
      <div className=" md:my-20 grid gap-11 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
