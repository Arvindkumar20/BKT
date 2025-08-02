import React from "react";
export default function Card(props) {
  return (
    <section className={props.className}>
      <div className="flex flex-col items-center justify-center rounded-md py-10 px-5   gap-5  shadow-md bg-gray-50 w-full">
        <div className={props.ImageClass}>
          <img src={props.cardData.url} alt="card image" className="w-full h-full object-center"/>
        </div>
        <div>
          <span>Name : {props.cardData.name}</span>
          <br />
          <span>Prompt : {props.cardData.prompt}</span>
        </div>
      </div>
    </section>
  );
}
