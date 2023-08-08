import React from "react";
import Card from "../components/Card";

const MyBookMarks = () => {
  return (
    <div>
      <div className=" md:my-20 grid gap-7 grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MyBookMarks;
