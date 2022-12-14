import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="w-screen h-10 whitespace-nowrap flex justify-end  items-center pr-10 bg-dark"
      h-48
    >
      <NavLink
        to="/"
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
        to="contact-us"
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
