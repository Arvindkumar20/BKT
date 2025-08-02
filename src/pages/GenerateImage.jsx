import React, { useState } from "react";
import Form from "./Form";
import Card from "../components/Card";

export default function GenerateImage() {
  const [cardData, setCardData] = useState({
    url: "https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg",
    name: "",
    prompt: "",
  });
  return (
    <div>
      <div className="md:flex flex-1 ">
        <Form setCardData={setCardData} />
        <Card cardData={cardData} className="flex items-center justify-center w-1/3 mx-auto mt-[8%]" 
        ImageClassName=""/>
      </div>
    </div>
  );
}
