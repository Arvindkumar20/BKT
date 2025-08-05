import React, { useState } from "react";
import Form from "./Form";
import Card from "../components/Card";

export default function GenerateImage() {
  const [cardData, setCardData] = useState({
    url: "https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg",
    name: "Arvind Kumar",
    prompt: "This is image",
  });
  return (
    <div>
      <div className="md:flex flex-1 ">
        <Form setCardData={setCardData} />
        <Card
          cardData={cardData}
          className="flex items-start justify-start w-full sm:mx-5 md:mx-auto md:w-[350px] lg:w-1/3 mt-[8%] "
          classNameForContainer="flex flex-col items-start justify-start rounded-md pb-5  gap-5  shadow-md bg-gray-50 h-[430px] "
          ImageClassName="h-auto md:h-[500px] lg:h-[400px] w-full"
        />
      </div>
    </div>
  );
}
