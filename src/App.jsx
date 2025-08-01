import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import History from "./pages/History";
export default function App() {
  const [cardData, setCardData] = useState({
    url: "https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg",
    name: "",
    prompt: "",
  });
  return (
    <>
      <div className="">
        <Navbar />
        <div className="md:flex flex-1 ">
          <Form setCardData={setCardData} />
          <Card cardData={cardData} />
        </div>
      </div>
      <History/>
    </>
  );
}
