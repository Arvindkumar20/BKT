import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";

export default function Card(props) {
  const [deleting, setDeleting] = useState(false);
  const url = useLocation();
  const CalcuateDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString();
  };
  console.log(CalcuateDate("2025-08-23T05:17:02.268Z"));
  const handleDownLoad = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url;
    link.click();

    document.body.appendChild(link);

    return document.removeChild(link);
  };

  const handleDelete = async (id) => {
    setDeleting(true);
    try {
      await axios.delete(`http://localhost:3000/api/image/delete-image/${id}`);
      props.setIsDeleted(true);
      setDeleting(false);
    } catch (error) {
      console.log(error);
      setDeleting(false);
    }
  };

  return (
    <section className={props.className}>
      <div className={props.classNameForContainer}>
        <div className={props.ImageClass}>
          <img
            src={props.cardData.url}
            alt="card image"
            className="w-full h-full object-center rounded"
          />
        </div>
        <section
          className="flex items-start justify-between gap-5 max-w-max-content "
          style={{
            padding: `0px ${url.pathname == "/history" ? "0px" : "10px"}`,
          }}
        >
          <div>
            <span className="text-md font-normal">
              Name : {props.cardData.name}
            </span>
            <br />
            <span className="text-sm font-light">
              Prompt : {props.cardData.prompt}
            </span>
          </div>
          <div>
            <span>Date : {CalcuateDate(props.cardData.createdAt)}</span>
            <br />
            <div className="flex items-center justify-start gap-20 mt-3">
              <button
                onClick={() => handleDownLoad(props.cardData.url)}
                className="cursor-pointer"
              >
                <FaDownload size={20} className="hover:text-blue-500" />
              </button>

              {!deleting ? (
                <button
                  onClick={() => handleDelete(props.cardData._id)}
                  className="cursor-pointer"
                >
                  <MdDelete
                    className="text-gray-900 hover:text-red-500"
                    size={25}
                  />
                </button>
              ) : (
                <ImSpinner2
                  className="text-red-500   custom-animation animate-spin text-center"
                  size={25}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
