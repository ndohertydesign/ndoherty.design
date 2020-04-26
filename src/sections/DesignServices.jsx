import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class DesignServices extends Component {
  render() {
    return (
      <div>
        <Row className="mt-5">
          <Col xs={12}>
            <h1 className="header-font">DESIGN SERVICES</h1>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="p-3" sm={12} md={6}>
            <h3 className="sub-header-font">Websites</h3>
            <p className="paragraph-font">
              I create and implement custom website designs for you or your
              business. I've worked with many different website technologies,
              but I have the most experience with React, Ruby on Rails, and
              Python. I've also worked with other website software, such as Wix
              and Webflow. If you have an idea for a new website feature or are
              looking to have one fully built, get in touch with me and we can
              come up with a solution that works for both of us.
            </p>
          </Col>
          <Col className="p-3" sm={12} md={6}>
            <h3 className="sub-header-font">Notion.so Workspaces</h3>
            <p className="paragraph-font">
              Notion.so is a software that redefines the document, essentially
              giving a platform for users to create a personal wiki for
              everything in their life. This tool can be especially useful for
              organizing your tasks, notes, and really anything. However, being
              given a blank canvas like that can be daunting. I will design and
              implement a workflow into your Notion workspace to help you keep
              track of your thoughts, organize your tasks, or something else.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
