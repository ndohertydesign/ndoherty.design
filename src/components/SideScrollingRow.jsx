import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

export default class SideScrollingRow extends Component {
  render() {
    return (
      <Row className="mb-3 mobile-side-scroll-row">
        <div
          className={`d-flex mobile-side-scroll-reverse ${
            this.props.imgRight ? "row-reverse" : ""
          }`}
        >
          <Col
            className={`mobile-side-scroll-img-col sticky-col p-0 ${
              this.props.imgRight
                ? "desktop-margin-left"
                : "desktop-margin-right"
            }`}
            xs={8}
          >
            <div
              className="w-100 h-100"
              style={{
                zIndex: "-1",
                position: "absolute",
                left: `${this.props.imgRight ? "-2rem" : "2rem"}`,
                top: "2rem",
                backgroundColor: "#ffc107",
                opacity: "80%",
              }}
            ></div>
            <Image
              fluid
              className="feature-img mobile-side-scroll-img"
              src={this.props.imgSrc}
            ></Image>
          </Col>
          <Col className="flex-center-content mobile-side-scroll-col" xs={4}>
            {this.props.children}
          </Col>
        </div>
      </Row>
    );
  }
}
