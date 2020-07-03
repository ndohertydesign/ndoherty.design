import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ProjectPage(props) {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <div className="flex-center-content justify-space-between">
            <h1 className="header-font mb-0">{props.title}</h1>
            <a className="custom-primary-btn" href="#">
              <i className="fas fa-home"></i>
            </a>
          </div>
          <hr className="bg-dark" />
        </Col>
      </Row>
      {props.children}
    </div>
  );
}
