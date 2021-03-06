import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SideScrollingRow from "../components/SideScrollingRow";
import { Link } from "react-router-dom";

export default class FeaturedProjects extends Component {
  render() {
    return (
      <div className="py-5">
        <Row className="mt-5">
          <Col xs={12}>
            <h1 className="header-font">FEATURED PROJECTS</h1>
          </Col>
        </Row>

        {this.props.featuredProjects.map((projectInfo, index) => {
          return (<SideScrollingRow
                    imgRight={index % 2 == 1}
                    imgSrc={projectInfo.image[0]}
                  >
                    <div className="p-1 mobile-side-scroll-text-wrapper">
                      <h3 className="sub-header-font">{projectInfo.name}</h3>
                      <div className="d-flex flex-wrap">
                        {projectInfo.tags.map((tag) => 
                          <span style={{padding: ".1rem .3rem", marginRight: ".3rem", marginBottom: ".5rem", fontSize: "8pt", backgroundColor: "#333", color: "white", borderRadius: "4pt"}} >
                            {tag}
                          </span>
                        )}
                      </div>
                     
                      <p className="paragraph-font">
                        {projectInfo.description}
                      </p>
                      <Link className="custom-primary-btn" to={projectInfo.routinglink}>
                          Read More
                      </Link>
                    </div>
                  </SideScrollingRow>
                )
        })}
      </div>
    );
  }
}
