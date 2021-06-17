import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import $ from "jquery";
import ScrollAnimation from 'react-animate-on-scroll'

export default class ScrollingHeader extends Component {
  componentDidMount() {
    $("#process-scroll-button").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#process-section").offset().top,
        },
        2000
      );
    });
  }

  render() {
    return (
      <Row className="py-5">
        <Col className="sticky-col p-3" sm={12} md={8}>
          <div className="scrolling-div">
            <div
              style={{ position: "relative", border: "3px solid black", backgroundColor: "#efefef" }}
              className="yellow-bg-margin-left d-flex justify-space-between"
            >
              <div
                className="w-100 h-100"
                style={{
                  zIndex: -1,
                  position: "absolute",
                  left: "-2rem",
                  top: "2rem",
                  backgroundColor: "black",
                  opacity: "100%",
                }}
              ></div>

              <Image
                style={{ position: "relative", zIndex: "1", }}
                fluid
                className="header-img"
                src="https://ik.imagekit.io/ndohertydesign/curb-hop_BNpWz6ByyF.jpg"
              ></Image> 
            </div>
          </div>
        </Col>
        <Col className="mt-4 p-3 scrolling-col" xs={12} md={4}>
          <div className="p-1 pt-3 mt-3 small-mb-mobile">
            <h3 className="sub-header-font">Who am I?</h3>
            {this.props.introCopy.whoAmIText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
          </div>
          <hr className="divider" />
          <div className="p-1 small-mb-mobile">
            <h3 className="sub-header-font">What do I do?</h3>
              {this.props.introCopy.whatIDoText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
          </div>
          <hr className="divider" />
          <div className="p-1">
            <h3 className="sub-header-font">How can I help you?</h3>
            {this.props.introCopy.howCanIHelpText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
            <div id="process-scroll-button" className="py-1">
              <span className="custom-primary-btn">More about my freelancing!</span>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
