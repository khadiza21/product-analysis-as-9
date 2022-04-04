import React from "react";
import "./Navbar.css";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  );
};

export default Navbar;
