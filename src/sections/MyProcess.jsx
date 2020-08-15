import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import $ from "jquery";

export default class MyProcess extends Component {
  componentDidMount() {
    $("#contact-scroll-button-2").click(function () {
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
      <div className="py-5">
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <h1 className="header-font">WHAT IS MY PROJECT PROCESS?</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} className="flex-column flex-align-center">
            <div className="position-relative w-100 process-min-height">
              <div className="stacking-div">
                <h3 className="sub-header-font background-number-font">01</h3>
              </div>
              <div className="stacking-div mt-1">
                <h3 className="sub-header-font font-weight-bold">
                  UNDERSTANDING THE PROBLEM
                </h3>
              </div>
            </div>
            <div className="w-75">
              <p className="paragraph-font">
                In the beginning, I do my best to understand the problem we are
                facing. Who are you looking to have view your portfolio? Are you
                searching for a job, or trying to gain clients? This is where I
                get an understanding of what you hope to get out of the website
                and why.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} className="flex-column flex-align-center">
            <div className="position-relative w-100 process-min-height">
              <div className="stacking-div">
                <h3 className="sub-header-font background-number-font">02</h3>
              </div>
              <div className="stacking-div mt-1">
                <h3 className="sub-header-font font-weight-bold">
                  CREATING A SOLUTION
                </h3>
              </div>
            </div>
            <div className="w-75">
              <p className="paragraph-font">
                This is where I begin putting together designs and concrete
                plans for building your website. I take into account what I
                learned from us talking in the first step, and design a site
                with everything you wanted to convey. I'll keep working with you
                consistently to find a design we both agree on.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} className="flex-column flex-align-center">
            <div className="position-relative w-100 process-min-height">
              <div className="stacking-div">
                <h3 className="sub-header-font background-number-font">03</h3>
              </div>
              <div className="stacking-div mt-1">
                <h3 className="sub-header-font font-weight-bold">
                  DEVELOPMENT AND DELIVERY
                </h3>
              </div>
            </div>

            <div className="w-75">
              <p className="paragraph-font">
                Once we agree on a design, the site can start development. I
                code all portfolio websites in React.js, and host them myself.
                This gives us lots of flexibility and control with the
                interactions on the site and allows you to pay zero in hosting
                fees. Once this is done, I'll put the website up and help you
                launch!
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <div id="contact-scroll-button-2" className="py-1">
              <span className="custom-primary-btn">Get a free assessment!</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
