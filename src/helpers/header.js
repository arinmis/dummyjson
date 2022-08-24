import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="w-screen h-10 bg-gray-900 flex justify-end  items-center pr-10 "
      h-48
    >
      <NavLink
        to="home"
        className={"link"}
        // className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="about-us"
        className={"link"}
        // className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        About Us
      </NavLink>
      <NavLink
        to="contanct-us"
        className={"link"}
        // className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        Contact Us
      </NavLink>
      <NavLink
        to="services"
        className={"link"}
        // className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        Services
      </NavLink>
    </div>
  );
};

export default Header;
