import React from "react";
import ProjectPage from "../components/ProjectPage";
import { Row, Col, Image } from "react-bootstrap";

export default function DearRuggles() {
  return (
    <ProjectPage title="DEAR RUGGLES">
      <Row>
        <Col xs={12}>
          <Image
            fluid
            src="/assets/img/dear-ruggles/screen1.png"
            className="mb-3"
          />
          <h3 className="sub-header-font">
            Design Class Project - Site Specificity
          </h3>
          <a href="https://drive.google.com/file/d/1VE3imxq1TmOlHe1I0k4WtRUfC_I1Zt5J/view?usp=sharing">
            <p className="paragraph-font">PROJECT DOCUMENTATION</p>
          </a>
          <p className="paragraph-font">
            Ruggles is a MBTA Station that runs through Northeastern University,
            and it is unofficially the bridge into Roxbury from NEU campus.
            Through our work on this project, we discovered and explored the
            angle of gentrification in the community, accelerated by the
            universities. We wanted to create an installation that could be used
            to brainstorm solutions and gather the sentiment of the neighborhood
            with certain prompts. For this reason, we chose it as a public site
            for an installation that explores the effects of gentrificiation on
            the area and allows passerbys to start a discussion on what we can
            do to remedy the effects.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={9}>
          <Image
            fluid
            src="/assets/img/dear-ruggles/screen2.png"
            className="mb-3"
          />
        </Col>
        <Col xs={12} md={3} className="flex-center-content">
          <p className="paragraph-font">
            I built this project in the Fall 2019 semester for my 5D
            Fundamentals class. For the installation, I built a Flask & React
            app that integrated with Twilio to recieve text responses to the
            prompts on the screen. The plan was to project this app in the
            station with specific prompts, and have people passing through
            respond to it and start a conversation with others. We only ran a
            local demo for the project off of my laptop, so there is no link for
            viewing the project online.
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
            src="/assets/img/dear-ruggles/screen3.png"
            className="mb-3"
          />
          <Image
            fluid
            src="/assets/img/dear-ruggles/sketch-process.png"
            className="mb-3"
          />
        </Col>
      </Row>
    </ProjectPage>
  );
}
