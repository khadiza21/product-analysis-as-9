import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2 className=" b-text text-center mt-5  pt-5 fw-bold">OURS BLOGS</h2>

      <Accordion className="container my-3 py-2 " defaultActiveKey="0">
        <Accordion.Item eventKey="0" className=" border-0 shadow rounded my-4">
          <Accordion.Header><h5 className="fw-bold ques">What is Contex API and Purpose of It?</h5> </Accordion.Header>
          <Accordion.Body>
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className=" border-0 shadow rounded my-4">
          <Accordion.Header ><h5 className="fw-bold ques"> What is Semantic Tag?</h5></Accordion.Header>
          <Accordion.Body>
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="ques"><h5 className="fw-bold ques">Show Differences Between inline VS inline block element?</h5> </Accordion.Header>
          <Accordion.Body>
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
