import React from "react";
import ProjectPage from "../components/ProjectPage";
import { Row, Col, Image } from "react-bootstrap";

export default function SocialMirrors() {
  return (
    <ProjectPage title="SOCIAL MIRRORS">
      <Row>
        <Col xs={12}>
          <Image
            fluid
            src="/assets/img/social-mirrors/website-top.png"
            className="mb-3"
          />
          <h3 className="sub-header-font">
            Design Class Project - Design Values
          </h3>
          <a href="https://socialmirrors.dev">
            <p className="paragraph-font">LIVE WEBSITE</p>
          </a>
          <p className="paragraph-font">
            I built this project in the Fall 2019 semester for my 5D
            Fundamentals class. We had to take a product that everyone was
            familiar with and redesign it with different design values from the
            original. For example, mirrors put value on aesthetic beauty and
            individualism. But in this project, I redesigned the mirrors to have
            the values of smartphones & social media: always-on, connected, and
            sharing. This allowed me to explore our relationship with our
            smartphones, and make people think "why should mirrors have that
            feature?", which then moves to "why do smartphones have this
            feature?". That was my goal with this project, to make people think
            about their relationship with their smartphone, by adding those
            similar features into the mirror.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={9}>
          <Image
            fluid
            src="/assets/img/social-mirrors/features.png"
            className="mb-3"
          />
        </Col>
        <Col xs={12} md={3} className="flex-center-content">
          <p className="paragraph-font">
            I wanted to build a website for this product as if there were a
            futuristic business that is releasing this product soon, and wanted
            a launch page for it. This way I was able to show off the features
            of the mirror for the project and design a website for a product
            launch, something I had not done before.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} className="flex-center-content flex-column">
          <div className="text-left w-100">
            <h1 className="header-font">Gallery</h1>
            <hr className="bg-dark" />
          </div>

          <Image
            fluid
            src="/assets/img/social-mirrors/waitlist.png"
            className="mb-3"
          />
        </Col>
      </Row>
    </ProjectPage>
  );
}
