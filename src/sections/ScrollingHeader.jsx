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
        <Col className="sticky-col p-3" sm={12} md={7}>
          <div className="scrolling-div">
            <div
              style={{ position: "relative", border: "3px solid black", backgroundColor: "#000", padding: "2rem" }}
              className="d-flex justify-space-between"
            >
             

              <h1 id="intro-text" className='header-font mb-0 white-text text-center'>
                I'm a&nbsp;graphic & web&nbsp;designer, a&nbsp;developer, and a&nbsp;student who loves to&nbsp;create.
              </h1>

              {/*<Image
                style={{ position: "relative", zIndex: "1", }}
                fluid
                className="header-img"
                src="https://ik.imagekit.io/ndohertydesign/sticky-header-img_sv3YeBXZE.png"
              ></Image>*/}
            </div>
          </div>
        </Col>
        <Col className="mt-4 p-3 py-4 scrolling-col" xs={12} md={5}>
            {
              this.props.headerImages.map((image) => {
                return <Image className="my-3" fluid src={image.image} />;
              })
            }
        </Col>
      </Row>
    );
  }
}
