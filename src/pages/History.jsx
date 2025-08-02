import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { data } from "../data/data";
import Card from "../components/Card";

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchData();
  };
  const [filteredData, setFilteredData] = useState([]);

  const searchData = () => {
    const applyFilter =
      searchTerm != ""
        ? data.filter((image) => {
            return (
              image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              image.prompt.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
        : data;
    console.log(applyFilter);
    setFilteredData(applyFilter);
  };
  useEffect(() => {
    searchData();
  }, []);

  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <section className="flex items-center justify-center gap-3 w-1/3 border py-3 px-2 rounded-md">
        <div>
          {" "}
          <FaSearch size={20} />
        </div>
        <input
          type="search"
          placeholder="Search here..."
          className="w-full outline-none"
          onChange={handleSearch}
        />
      </section>
      <ul className="flex items-center justify-center gap-5 flex-wrap">
        {filteredData?.length > 1 &&
          filteredData?.map((image, index) => {
            return (
              <li key={index}>
                <Card
                  cardData={image}
                  className="flex items-center justify-center w-[300px] mx-auto mt-[8%] h-max-content"
                  ImageClass={"w-[300px] h-[300px] "}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
