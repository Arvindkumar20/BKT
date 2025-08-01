import React from "react";
export default function Card(props) {
  return (
    <section className="flex items-center justify-center w-1/3 mx-auto mt-[8%]">
      <div className="flex flex-col items-center justify-center rounded-md py-10 px-5   gap-5  shadow-md bg-gray-50 w-full">
        <div>
          <img src={props.cardData.url} alt="card image" />
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
