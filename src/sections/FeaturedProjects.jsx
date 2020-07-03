import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SideScrollingRow from "../components/SideScrollingRow";
import { Link } from "react-router-dom";

export default class FeaturedProjects extends Component {
  render() {
    return (
      <div>
        <Row className="mt-5">
          <Col xs={12}>
            <h1 className="header-font">FEATURED PROJECTS</h1>
          </Col>
        </Row>

        <SideScrollingRow imgSrc="https://ik.imagekit.io/ndohertydesign/rocky-featured-project-img_ImfCg8ULWj.png">
          <div className="p-1 mobile-side-scroll-text-wrapper">
            <h3 className="sub-header-font">
              Music Artist Experience Collages
            </h3>
            <p className="paragraph-font">
              As part of a class project to make "drawings" that are an
              observation of our surroundings, I chose to make a collection of
              posters that capture the experience of following and listening to
              a music artist. The collages are made of a few lyrics from the
              artist's songs, and covered in images taken straight from their
              social media.
            </p>
            <Link to="/artist-collages">
              <a className="custom-primary-btn" href="#">
                Read More
              </a>
            </Link>
          </div>
        </SideScrollingRow>

        <SideScrollingRow
          imgRight={true}
          imgSrc="https://ik.imagekit.io/ndohertydesign/dear-ruggles_225cxmz12aN.png"
        >
          <div className="p-1 mobile-side-scroll-text-wrapper">
            <h3 className="sub-header-font">Dear Ruggles</h3>
            <p className="paragraph-font">
              Ruggles is a MBTA Station that runs through Northeastern
              University, and it is unofficially the bridge into Roxbury from
              NEU campus. For this reason, we chose it as a public site for an
              installation that explores the effects of gentrificiation on the
              area and allows passerbys to start a discussion on what we can do
              to remedy the effects.
            </p>
            <Link to="/dear-ruggles">
              <a className="custom-primary-btn" href="#">
                Read More
              </a>
            </Link>
          </div>
        </SideScrollingRow>
      </div>
    );
  }
}
