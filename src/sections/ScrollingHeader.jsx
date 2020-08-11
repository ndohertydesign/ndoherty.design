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
      <Row className="mb-5">
        <Col className="sticky-col p-3" sm={12} md={8}>
          <h1 className="header-font">NDOHERTY.DESIGN</h1>
          <Image
            fluid
            className="header-img"
            src="https://ik.imagekit.io/ndohertydesign/sticky-header-img_hnwd08NSiI.png"
          ></Image>
        </Col>
        <Col className="p-3 scrolling-col" xs={12} md={4}>
          <div className="mb-5 p-1">
            <h3 className="sub-header-font">Who am I?</h3>
            <p className="paragraph-font mb-1"></p>
            <p className="paragraph-font">
              I'm <strong>Nick Doherty</strong>, a designer and developer in my
              fourth year at Northeastern University. I am working towards a
              Computer Science / Design combined degree and plan to graduate in
              December 2021.
            </p>
          </div>
          <div className="my-5 p-1">
            <h3 className="sub-header-font">What do I do?</h3>
            <p className="paragraph-font mb-1">
              I've worked in software engineering at Catalant Technologies in
              2020 and Skillz in 2019 doing full-stack development at both
              companies. Some technologies and programming languages I've worked
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
              I also do freelance web design & development. I design and build
              custom websites for clients, whether they are a small business
              looking for an online presence or an artist who needs a portfolio
              built.
            </p>
          </div>
          <div className="mt-5 p-1">
            <h3 className="sub-header-font">How can I help you?</h3>
            <p className="paragraph-font mb-0">
              <strong>If you're looking to have a website created</strong>
            </p>
            <p className="paragraph-font">
              Whether it's going to be your art portfolio or a small business or
              something entirely different, I'm your guy! I can create fully
              custom websites and help you save on web hosting costs.
            </p>
            <p className="paragraph-font mb-0">
              <strong>If you already have a website</strong>
            </p>
            <p className="paragraph-font">
              Maybe you feel like it's missing something, a certain feature, an
              aesthetic that you're trying to capture, or something else. I'd
              love to hear about it and work with you to find the best solution
              for your case.
            </p>
            <div id="contact-scroll-button" className="py-1">
              <span className="custom-primary-btn">GET IN TOUCH</span>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
