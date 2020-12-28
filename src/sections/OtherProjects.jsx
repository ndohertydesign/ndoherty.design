import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function OtherProjects(props) {
  return (
    <div className="pb-5">
      <Row className="mt-5">
        <Col xs={12}>
          <h1 className="header-font">OTHER PROJECTS</h1>
        </Col>
      </Row>
      <Row>
        {props.projectTeasers.map((teaserInfo) => {
          return (<Card imgSrc={teaserInfo.image[0]}>
                    <h3 className="sub-header-font">{teaserInfo.name}</h3>
                    <div className="d-flex flex-wrap">
                      {teaserInfo.tags.map((tag) => 
                        <span style={{padding: ".1rem .3rem", marginRight: ".3rem", marginBottom: ".5rem", fontSize: "8pt", backgroundColor: "#333", color: "white", borderRadius: "4pt"}} >
                          {tag}
                        </span>
                      )}
                   </div>
                    <p className="paragraph-font">{teaserInfo.description}</p>
                    <Link className="custom-primary-btn" to={`${teaserInfo.routinglink}`}>
                        Read More
                    </Link>
                  </Card>
                  )
        })}
      </Row>
    </div>
  );
}
