import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";
import aboutimg from "../../image/laptop.PNG";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="banner-about d-flex justify-content-center align-items-center">
        <div className="text-center fs-5 px-3">
          <LightSpeed left>
          <h1 className="fw-bold mb-4">WE CREATE <span className="aw">AWESOME</span> ANALYSIS</h1></LightSpeed>
          <LightSpeed right>
          <p className="fw-bold fs-5">
            We collaborate with you to create new value through digital
            transformation. <br /> We have hundreds of specialists at your
            service.
          </p></LightSpeed>
        </div>
      </div>
      <div className="mt-5 pt-5">
        <Container className="container my-5 py-3">
          <Row>
            <Col xs={12} md={6} className="my-3 side">
              <div className="px-2  text-justify side-1 m-5 d-flex justify-content-center  align-items-center">
                <div className="px-3">
                  <h3 className="my-2 fs-1 fw-bold">Laptop Perfection </h3>

                  <p className="mt-3 fw-bold">
                    We’re a small creative design studio based in New York,
                    working with adventurous clients and providing Creative
                    Concept.
                  </p>
                  <Button className="btn my-3 fw-bold" variant="btn">
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </Col>

            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center my-3 align-items-center side-2"
            >
              <div className="px-2  text-justify">
                <h3 className="my-2 fs-2 fw-bold">Sample Headline </h3>

                <p className="mt-3">
                  We’re a small creative design studio based in New York
                </p>
                <Button className="btn my-3 fw-bold" variant="btn">
                  LEARN MORE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="container my-5 py-3">
          <Row>
            <Col
              xs={12}
              md={6}
              className=" d-flex justify-content-center my-3 align-items-center "
            >
              <img className="img-fluid rounded h-75" src={aboutimg} alt="" />
            </Col>

            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center my-3 align-items-center "
            >
              <div className="px-4  text-justify">
                <h3 className="my-2 fs-2 fw-bold pb-3 ">AWESOME FEATURES </h3>

                <p className="mt-3">
                  No charger was included with the computer, and the
                  instructions are very clear that we can only use a Coolby
                  charger--none of which are available on Amazon. Honestly, this
                  is ridiculous. I have tried to contact the seller, but have
                  had no response. In their literature.
                </p>
                <Button className="btn my-3  fw-bold" variant="btn">
                  LIVE DEMO
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
