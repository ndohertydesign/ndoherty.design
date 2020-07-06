import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class BlogPost extends Component {
  render() {
    return (
      <div className="my-5">
        <Row>
          <Col>
            <h1 className="header-font mb-0">{this.props.title}</h1>
            <p className="paragraph-font">{this.props.date}</p>
            <br />
          </Col>
        </Row>
        {this.props.children}
      </div>
    );
  }
}
