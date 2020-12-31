import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import $ from "jquery";
import ScrollAnimation from 'react-animate-on-scroll'

export default class ScrollingHeader extends Component {
  componentDidMount() {
    $("#contact-scroll-button").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#contact-section").offset().top,
        },
        2000
      );
    });
  }

  render() {
    return (
      <Row className="py-5">
        <Col className="sticky-col p-3" sm={12} md={8}>
          <div className="">
            <ScrollAnimation animateIn='rollIn' animateOut='rollOut' offset={50}>
              <h1 className="display-2 text-center main-title">NDOHERTY.DESIGN</h1>
            </ScrollAnimation>
            <div
              style={{ position: "relative" }}
              className="yellow-bg-margin-left"
            >
              <div
                className="w-100 h-100"
                style={{
                  position: "absolute",
                  left: "-2rem",
                  top: "2rem",
                  backgroundColor: "#ffc107",
                  opacity: "80%",
                }}
              ></div>
              <Image
                style={{ position: "relative", zIndex: "1" }}
                fluid
                className="header-img"
                src="https://ik.imagekit.io/ndohertydesign/sticky-header-img_sv3YeBXZE.png"
             ></Image> 
            </div>
          </div>
        </Col>
        <Col className="p-3 scrolling-col" xs={12} md={4}>
          <div className="mb-5 p-1 pt-3 small-mb-mobile">
            <h3 className="sub-header-font">Who am I?</h3>
            {this.props.introCopy.whoAmIText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
          </div>
          <div className="mb-5 p-1 small-mb-mobile">
            <h3 className="sub-header-font">What do I do?</h3>
              {this.props.introCopy.whatIDoText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
          </div>
          <div className="p-1">
            <h3 className="sub-header-font">How can I help you?</h3>
            {this.props.introCopy.howCanIHelpText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
            <div id="contact-scroll-button" className="py-1">
              <span className="custom-primary-btn">Schedule a free call!</span>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
