import React, { useContext } from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { Toggle } from "../context/Toggle";

import { Switch } from "antd";
const Navbar = () => {


   const { Toggler} =useContext(Toggle)


  return (
    <>
      <div className="container">
        <h1>Logo</h1>

        <div className="smallcontainer">
             <NavLink to="/"
              style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
             >Home</NavLink> 
             <NavLink to="/about"
              style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
             >About</NavLink> 
             <NavLink to="/contact"
              style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
             
             >Contact</NavLink> 
            <Switch onClick={Toggler}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
