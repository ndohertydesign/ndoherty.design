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
          <div style={{ marginTop: "3.7rem" }}>
            <div
              style={{ position: "relative", border: "3px solid black", backgroundColor: "#efefef", padding: "1.25rem" }}
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

              <div className="flex-center-content w-100">
                <Image className="header-img" fluid src="https://ik.imagekit.io/ndohertydesign/king-of-diamonds-graffiti_2x_v0sZVDJEy.png">
                </Image>
              </div>

              <div style={{paddingLeft: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h3 className="sub-header-font m-0">
                  Interested in buying some of my work?
                </h3>
                <p className="paragraph-font mb-2">
                  I'm currently selling stickers and prints. More is always on the way.
                </p>
                <a href="https://shop.ndoherty.design" className="no-hover"> 
                  <span className="custom-primary-btn">View shop</span> 
                </a>
              </div>
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
