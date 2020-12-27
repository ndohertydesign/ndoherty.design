import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export default function ProjectPage(props) {
  return (
    <div className="pt-5">
      <Row>
        <Col xs={12}>
          <div className="flex-center-content justify-space-between">
            <h1 className="header-font mb-0">{props.title}</h1>
            <a className="custom-primary-btn" href="#">
              <i className="fas fa-home"></i>
            </a>
          </div>
          <hr className="bg-dark" />
        </Col>
      </Row>
      {props.pageContent.map((block) => {
        if (block.type == "image") {
          return (<div className="w-100 text-center my-3">            
                    <Image fluid src={block.content} className="w-75" />
                  </div>)
        } else if (block.type == "h1") {
          return <h1 className="header-font">{block.content}</h1>
        } else if (block.type == "h3") {
          return <h3 className="sub-header-font">{block.content}</h3>
        } else if (block.type == "p") {
          return <p className="paragraph-font">{block.content}</p>
        } else if (block.type == "br") {
          return <br />
        } else if (block.type == "p") {
          return <p className="paragraph-font">{block.content}</p>
        } else if (block.type == "a") {
          return <a href={block.content}>{block.content}</a>
        } else if (block.type == "hr") {
          return <hr />
        }
      })}
    </div>
  );
}
