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
        3000
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
            src="/assets/img/sticky-header-img.png"
          ></Image>
          <div id="contact-scroll-button" className="text-right py-2">
            <span className="custom-primary-btn">GET IN TOUCH</span>
          </div>
        </Col>
        <Col className="p-3 scrolling-col" xs={12} md={4}>
          <div className="mb-5 p-1">
            <h3 className="sub-header-font">Who am I?</h3>
            <p className="paragraph-font">
              I'm Nick Doherty, a freelance designer and developer currently in
              my third year at Northeastern University, where I am working on a
              Computer Science / Design combined degree. Right now, I work at
              Catalant Technologies as a software engineering co-op through my
              school. Some of my hobbies are skateboarding, customizing
              clothing, and making sketches/graphics.
            </p>
          </div>
          <div className="my-5 p-1">
            <h3 className="sub-header-font">What do I do?</h3>
            <p className="paragraph-font">
              Most of my work is typically custom website design and
              development. I have done portfolio websites for designers to
              showcase their projects as well as integrating online ordering
              into a restaurants' existing website. I've been exploring making
              custom clothing as well as some other fun items to sell on my
              shop, so I also have that in the works.
            </p>
          </div>
          <div className="mt-5 p-1">
            <h3 className="sub-header-font">How can I help you?</h3>
            <p className="paragraph-font">
              If you have a website for your business that you've been meaning
              to update or need to integrate a new feature like online ordering,
              we can work together to find a solution that works well for your
              existing workflow. If you're a student looking for a way to
              display the projects you've been working on at school or on your
              own time, we can work together to design a portfolio site that
              captivates the attention of potential employers.
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
