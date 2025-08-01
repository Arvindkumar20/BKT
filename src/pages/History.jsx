import React from "react";
import { FaSearch } from "react-icons/fa";

export default function History() {
  return (
    <div className="my-10 flex items-center justify-center">
      <section className="flex items-center justify-center gap-3 w-1/3 border py-3 px-2 rounded-md">
        <div> <FaSearch size={20}/></div>
        <input
          type="search"
          placeholder="Search here..."
          className="w-full outline-none"
        />
      </section>
    </div>
  );
}
