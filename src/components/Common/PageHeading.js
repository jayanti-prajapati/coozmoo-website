import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import ColouredSpan from "./ColouredSpan";

// core components

function PageHeading({
  fadedNumber,
  title,
  titleColoured,
  desc,
  learnMoreLink,
}) {
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
                fontFamily: "sans-serif",
              }}
            >
              {fadedNumber}
            </h1>
            <h2
              className="title"
              style={{
                position: "relative",
                zIndex: "1001",
                fontWeight: "inherit",
              }}
            >
              {title}
              <ColouredSpan> {titleColoured}</ColouredSpan>
            </h2>
          </Col>
          <Col lg="6" md="6">
            <p style={{ textAlign: "justify" }}>{desc}</p>
            <a color="default" href={learnMoreLink} style={{ float: "left" }}>
              Learn more
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PageHeading;
