import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import ColouredSpan from "./ColouredSpan";

// core components

function PageHeading() {
  return (
    <>
      <Container className="text-center">
        <Row className="">
          <Col lg="6" md="6">
            <h1
              style={{
                color: "#f8f9fa",
                fontSize: "7rem",
                position: "absolute",
                zIndex: 1000,
                left: "90px",
                top: "-13px",
                fontWeight: "700",
              }}
            >
              01
            </h1>
            <h2
              className="title"
              style={{
                position: "relative",
                zIndex: "1001",
                fontWeight: "inherit",
              }}
            >
              Optimize
              <ColouredSpan> Search</ColouredSpan>
            </h2>
          </Col>
          <Col lg="6" md="6">
            <p style={{ textAlign: "justify" }}>
              By utilizing cutting-edge optimization techniques and utilizing
              industry-leading SEO strategies, you can elevate your online
              presence and skyrocket your search engine rankings.
            </p>
            <a color="default" style={{ float: "left" }}>
              Learn more
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PageHeading;
