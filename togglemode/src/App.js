import React from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
