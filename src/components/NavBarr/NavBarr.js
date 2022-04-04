import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="# " className="fw-bold ms-3">
          BK Laptop{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
