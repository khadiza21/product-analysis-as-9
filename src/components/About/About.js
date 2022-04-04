import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./About.css";
const About = () => {
  return (
    <div>
        {/* https://nicepage.com/website-templates/preview/sustom-app-development-139937?device=desktop */}
        {/* https://www.templatemonsterpreview.com/demo/190349.html?_gl=1*4m4nkt*_ga*MTE4NDAxNTg3Ny4xNjQ5MDg4ODY3*_ga_FTPYEGT5LY*MTY0OTA4ODg2Ni4xLjAuMTY0OTA4ODg2Ni42MA..&_ga=2.235332289.1946454262.1649088867-1184015877.1649088867 */}
      <div>
        <h1>WE CREATE AWESOME ANALYSIS</h1>
        <p>tootsie roll jelly pie gummi bears gingerbread</p>
      </div>
      <div>
        <Container className="container my-5 py-3">
          <Row>
            <Col xs={12} md={6} className="my-3">
              <img className="img-fluid rounded " src="{}" alt="" />
            </Col>

            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center my-3 align-items-center "
            >
              <div className="px-2  text-justify">
                <h3 className="my-2 ">AWESOME FEATURES </h3>

                <p className="mt-3">
                  Pie cake chupa chups lollipop. Sugar plum bonbon muffin muffin
                  cookie applicake soufflé liquorice sweet roll. Sugar plum
                  fruitcake tootsie roll topping. Cheesecake sugar plum jelly
                  unerdwear.com oat cake tootsie roll chocolate cake cotton
                  candy. Tart dragée dragée pudding donut. Oat cake soufflé
                  dragée gingerbread cake jujubes macaroon jujubes. Croissant...
                </p>
                <Button className="btn my-3 fw-bold" variant="btn">
                  LIVE DEMO
                </Button>
              </div>
            </Col>
          </Row>
        </Container>


        <Container className="container my-5 py-3">
          <Row>
            <Col xs={12} md={6} className="my-3">
              <img className="img-fluid rounded " src="{}" alt="" />
            </Col>

            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center my-3 align-items-center "
            >
              <div className="px-2  text-justify">
                <h3 className="my-2 ">AWESOME FEATURES </h3>

                <p className="mt-3">
                  Pie cake chupa chups lollipop. Sugar plum bonbon muffin muffin
                  cookie applicake soufflé liquorice sweet roll. Sugar plum
                  fruitcake tootsie roll topping. Cheesecake sugar plum jelly
                  unerdwear.com oat cake tootsie roll chocolate cake cotton
                  candy. Tart dragée dragée pudding donut. Oat cake soufflé
                  dragée gingerbread cake jujubes macaroon jujubes. Croissant...
                </p>
                <Button className="btn my-3 fw-bold" variant="btn">
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
