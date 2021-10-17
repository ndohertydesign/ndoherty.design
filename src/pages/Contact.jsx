import React, { Component } from "react";
import ReactContactForm from "react-mail-form";
import { Row, Col } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-section">

            <h1 className="header-font mt-5">Contact Me</h1>
 
        <Row className="mt-5 mx-0">
          <Col xs={12} lg={8} className="p-0">
            <p className="paragraph-font">
              Let's see what we can create together.
            </p>
            <ReactContactForm
              to="ndoherty.design@gmail.com"
              className="contact-form"
              titlePlaceholder="How can I help you?"
              contentsPlaceholder="Give a few details so that I can better understand when we talk"
              buttonText="Get in Touch!"
              contentsMaxLength={1000}
            />
          </Col>
          <Col xs={0} lg={4} />
        </Row>
      </div>
    );
  }
}
