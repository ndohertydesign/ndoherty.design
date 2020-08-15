import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function OtherProjects() {
  return (
    <div className="py-5">
      <Row className="mt-5">
        <Col xs={12}>
          <h1 className="header-font">OTHER PROJECTS</h1>
        </Col>
      </Row>
      <Row>
        <Card imgSrc="https://ik.imagekit.io/ndohertydesign/playlist-ninja_A3MdKmuE6C.jpg">
          <h3 className="sub-header-font">Playlist Ninja</h3>
          <p className="paragraph-font">
            A React app built using the Spotify Web API that allows better
            control over the creation and customiziation of Spotify playlists,
            such as viewing their musical statistics and filtering
            reccommendations to match certain criteria.
          </p>
          <Link to="/playlist-ninja">
            <a className="custom-primary-btn" href="#">
              Read More
            </a>
          </Link>
        </Card>

        <Card imgSrc="https://ik.imagekit.io/ndohertydesign/social-mirrors_z4fnH0TxX.jpg">
          <h3 className="sub-header-font">Social Mirrors</h3>
          <p className="paragraph-font">
            A design project and website exploring fictional product in order to
            question the values of smartphones & social media, such as always
            being connected to others and sharing content online.
          </p>
          <Link to="/social-mirrors">
            <a className="custom-primary-btn" href="#">
              Read More
            </a>
          </Link>
        </Card>

        <Card imgSrc="https://ik.imagekit.io/ndohertydesign/stewardship-app_9aC6jYyCyR.jpg">
          <h3 className="sub-header-font">Stewardship App</h3>
          <p className="paragraph-font">
            An app designed to promote stewardship across the general population
            by gamifying the experience as well as giving users easier access to
            events and information on how to give back.
          </p>
          <Link to="stewardship-app">
            <a className="custom-primary-btn" href="#">
              Read More
            </a>
          </Link>
        </Card>
      </Row>
    </div>
  );
}
