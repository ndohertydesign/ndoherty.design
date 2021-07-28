import React, { Component } from "react";
import ReactContactForm from "react-mail-form";
import { Row, Col } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-section" style={{padding: "20px"}}>
        <Row>
          <Col xs={12}>
            <h3 className="sub-header-font">Contact</h3>
            <hr className="divider mb-5" />
          </Col>
        </Row>
        <Row>
          <Col xs={0} lg={2} />
          <Col xs={12} lg={8}>
            <h3 className="sub-header-font">Get in touch with me!</h3>
            <p className="paragraph-font">
              Let's see what we can create.
            </p>
            <ReactContactForm
              to="ndoherty.design@gmail.com"
              className="contact-form"
              titlePlaceholder="How can I help you?"
              contentsPlaceholder="Give a few details so that I can better understand when we talk"
              buttonText="Send email"
              contentsMaxLength={1000}
            />
          </Col>
          <Col xs={0} lg={2} />
        </Row>
      </div>
    );
  }
}
