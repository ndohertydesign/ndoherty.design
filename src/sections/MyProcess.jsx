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
      <div className="py-5" id="process-section">
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
                <h3 className="sub-header-font font-weight-bold text-center">
                  {this.props.processCopy.step1Title}
                </h3>
              </div>
            </div>
            <div className="w-75">
              <p className="paragraph-font">
                {this.props.processCopy.step1Description}
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} className="flex-column flex-align-center">
            <div className="position-relative w-100 process-min-height">
              <div className="stacking-div">
                <h3 className="sub-header-font background-number-font">02</h3>
              </div>
              <div className="stacking-div mt-1">
                <h3 className="sub-header-font font-weight-bold text-center">
                  {this.props.processCopy.step2Title}
                </h3>
              </div>
            </div>
            <div className="w-75">
              <p className="paragraph-font">
              {this.props.processCopy.step2Description}
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} className="flex-column flex-align-center">
            <div className="position-relative w-100 process-min-height">
              <div className="stacking-div">
                <h3 className="sub-header-font background-number-font">03</h3>
              </div>
              <div className="stacking-div mt-1">
                <h3 className="sub-header-font font-weight-bold text-center">
                  {this.props.processCopy.step3Title}
                </h3>
              </div>
            </div>

            <div className="w-75">
              <p className="paragraph-font">
              {this.props.processCopy.step3Description}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <div id="contact-scroll-button-2" className="py-1">
              <span className="custom-primary-btn">Get a free project estimation!</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
