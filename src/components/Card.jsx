import React from "react";
import { Col, Image } from "react-bootstrap";

export default function Card(props) {
  return (
    <Col className="p-3" sm={12} md={4}>
      {props.imgSrc && (
        <div className="card-img-wrapper flex-center-content mb-4">
          <Image fluid src={props.imgSrc}></Image>
        </div>
      )}
      {props.children}
    </Col>
  );
}
