import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll'

export default class SideScrollingRow extends Component {
  render() {
    return (
      <ScrollAnimation animateIn={this.props.imgRight ? 'slideInLeft' : 'slideInRight'} animateOnce={true} >
        <Row className="mobile-side-scroll-row" style={{marginBottom: "6rem"}}>
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
            <Col
              className=" flex-center-content flex-column mobile-side-scroll-col"
              xs={4}
            >
              <p className="swipe-interaction-font pb-5 desktop-d-none">
                {" ← Swipe to see!"}
              </p>
              <div className="flex-center-content">{this.props.children}</div>
            </Col>
          </div>
        </Row>
      </ScrollAnimation>
    );
  }
}
