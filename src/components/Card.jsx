import React from "react";
import img from "../assets/react.svg";
export default function Card() {
  return (
    <section className="flex items-center justify-center w-1/3 mx-auto mt-[8%]">
      <div className="flex flex-col items-center justify-center rounded-md py-10 px-5   gap-5  shadow-md bg-gray-50 w-full">
        <div>
          <img src={img} alt="card image" />
        </div>
        <div>hrgrughrt</div>
      </div>
    </section>
  );
}
