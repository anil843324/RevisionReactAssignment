import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth,logout } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <h2>Logo</h2>

        <div className="smallcontainer">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "red" : "",
              };
            }}
          >
            Users
          </NavLink>

          {isAuth ? (
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  display: "block",
                  color: isActive ? "red" : "",
                };
              }}

              onClick={()=>{logout()}}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  display: "block",
                  color: isActive ? "red" : "",
                };
              }}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
