import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import History from "./pages/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenerateImage from "./pages/GenerateImage";

export default function App() {
  return (
    <>
      <Router>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<GenerateImage />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
        
      </Router>
    </>
  );
}
