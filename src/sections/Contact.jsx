import React, { Component } from "react";
import ReactContactForm from "react-mail-form";
import { Row, Col } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-section">
        <Row className="mb-5">
          <Col xs={12}>
            <h1 className="header-font">GET IN TOUCH</h1>
            <p className="paragraph-font">
              Let's see what we can create together!
            </p>
          </Col>
          <Col xs={12}>
            <ReactContactForm
              to="ndoherty.design@gmail.com"
              className="contact-form"
              titlePlaceholder="How can I help you?"
              contentsPlaceholder="Give a few details so that I can better understand when we talk"
              buttonText="Send it!"
              contentsMaxLength={1000}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
