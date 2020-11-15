import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import $ from "jquery";

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
            <h1 className="elektrix-bold display-2 text-center main-title">NDOHERTY.DESIGN</h1>
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
                src="https://ik.imagekit.io/ndohertydesign/sticky-header-img_hnwd08NSiI.png"
              ></Image>
            </div>
          </div>
        </Col>
        <Col className="p-3 scrolling-col" xs={12} md={4}>
          <div className="mb-5 p-1 pt-3 small-mb-mobile">
            <h3 className="sub-header-font">Who am I?</h3>
            <p className="paragraph-font mb-1"></p>
            <p className="paragraph-font">
              I'm <strong>Nick Doherty</strong>, a designer and developer in my
              fourth year at Northeastern University working towards a Computer
              Science / Design combined degree.
            </p>
          </div>
          <div className="mb-5 p-1 small-mb-mobile">
            <h3 className="sub-header-font">What do I do?</h3>
            <p className="paragraph-font mb-1">
              I've worked two software engineering jobs in the last two years.
              Some technologies and programming languages I've worked
              professionally with are:
            </p>
            <p className="paragraph-font mb-1">
              <strong>Javascript</strong> (React, JQuery)
            </p>
            <p className="paragraph-font mb-1">
              <strong>Python</strong> (Flask, Jinja)
            </p>
            <p className="paragraph-font mb-4">
              <strong>Ruby</strong> (Ruby on Rails)
            </p>
            <p className="paragraph-font">
              I do freelance web design & development. I design and build custom
              websites for clients.
            </p>
          </div>
          <div className="p-1">
            <h3 className="sub-header-font">How can I help you?</h3>
            <p className="paragraph-font">
              If you need a resume website for your job search or a portfolio to
              show off your projects, I create custom websites and help you save
              on web hosting costs.
            </p>
            <p className="paragraph-font">
              If you already have a website and want to update it, I will work
              with you to find a great solution.
            </p>
            <div id="contact-scroll-button" className="py-1">
              <span className="custom-primary-btn">Schedule a free call!</span>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
