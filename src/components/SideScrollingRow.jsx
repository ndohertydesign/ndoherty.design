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
          <Col className="mobile-side-scroll-img-col sticky-col" xs={8}>
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
