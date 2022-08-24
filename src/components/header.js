import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="w-screen h-10  flex justify-end  items-center pr-10 bg-dark"
      h-48
    >
      <NavLink
        to="home"
        className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="about-us"
        className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        About Us
      </NavLink>
      <NavLink
        to="contanct-us"
        className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        Contact Us
      </NavLink>
      <NavLink
        to="services"
        className={({ isActive }) => (isActive ? "link-clicked" : "link")}
      >
        Services
      </NavLink>
    </div>
  );
};

export default Header;
