// import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import GenerateImage from "./pages/GenerateImage";
const GenerateImage = React.lazy(()=>import("./pages/GenerateImage"));
const History = React.lazy(()=>import("./pages/History"));
import Footer from "./components/Footer";
import { ImSpinner2 } from "react-icons/im";



export default function App() {
  return (
    <>
      <Suspense fallback={<span className="flex items-center justify-center mx-auto my-[20%]"><ImSpinner2 className="text-blue-500   custom-animation animate-bounce" size={40}/></span>}>

        <Router>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<GenerateImage />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      </Suspense>
    </>
  );
}
