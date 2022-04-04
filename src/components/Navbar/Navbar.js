import React from "react";
import "./Navbar.css";
import CustomLink from "../CustomLink/CustomLink";
// import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="d-flex justify-center ">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    
     
    </div>
  );
};

export default Navbar;
