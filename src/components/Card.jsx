import React from "react";
import { FaDownload } from "react-icons/fa";
export default function Card(props) {
  const handleDownLoad = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url;
    link.click();

    document.body.appendChild(link);

    return document.removeChild(link);
  };
  return (
    <section className={props.className}>
      <div className="flex flex-col items-center justify-center rounded-md py-10 px-5   gap-5  shadow-md bg-gray-50 w-full">
        <div className={props.ImageClass}>
          <img
            src={props.cardData.url}
            alt="card image"
            className="w-full h-full object-center"
          />
        </div>
        <section className="flex items-start justify-start gap-5 max-w-max-content">
          <div>
          <span className="text-md font-normal">Name : {props.cardData.name}</span>
          <br />
          <span className="text-sm font-light">Prompt : {props.cardData.prompt}</span>
        </div>
        <div>
          <span>date</span>
          <br />
          <button onClick={() => handleDownLoad(props.cardData.url)}>
          <FaDownload />
        </button>
        </div>
        </section>
      </div>
    </section>
  );
}
