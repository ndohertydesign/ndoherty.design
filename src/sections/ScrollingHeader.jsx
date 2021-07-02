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
        <Col className="p-3 py-4 scrolling-col" xs={12} md={5}>
          <div style={{display: "grid", rowGap: "10px", columnGap: "10px", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(10, 100px)", marginTop: "3.2rem"}}>
            {
              this.props.headerImages.map((image) => {
                return (
                  <div style={{display: "grid", gridColumnStart: image.colstart, gridColumnEnd: image.colend, gridRowStart: image.rowstart, gridRowEnd: image.rowend}}>
                    <Image style={{width: "100%", height: "100%", objectFit: image.objectfit}} src={image.image} />
                  </div>
                )

                
                
              })
            }
          </div>
        </Col>
      </Row>
    );
  }
}
