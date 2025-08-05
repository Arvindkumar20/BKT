import React from "react";
import { FaDownload } from "react-icons/fa";
import { useLocation } from "react-router-dom";
export default function Card(props) {

  const url=useLocation();

  const handleDownLoad = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url;
    link.click();

    document.body.appendChild(link);

    return document.removeChild(link);
  };
  return (
    <section className={props.className }>
      <div className={props.classNameForContainer}>
        <div className={props.ImageClass}>
          <img
            src={props.cardData.url}
            alt="card image"
            className="w-full h-full object-center rounded"
          />
        </div>
        <section className="flex items-start justify-between gap-5 max-w-max-content " style={{
          padding:`0px ${url.pathname=="/history"?"0px":"10px"}`
        }}>
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
