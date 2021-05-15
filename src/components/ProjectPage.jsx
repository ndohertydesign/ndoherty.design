import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { HashLoader } from "react-spinners/";
import PDF from "./PDF";

export default function ProjectPage(props) {

  const [pageContent, setPageContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetch(`https://ndohertydesign-api.herokuapp.com/getPageContent/${props.pageID}`)
      .then((response) => response.json())
      .then((content) => {
        setPageContent(content)
        setLoading(false)
      })
    }
  });

  if (loading) {
    return <div style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div className="text-center">
                <HashLoader
                  size={100}
                  color="#ffc107"
                  loading={true}
                />
                <p className="mt-3 paragraph-font">Loading...</p>
              </div>
           </div>
  }

  return (
    <div className="pt-5 mt-5">
      <Row>
        <Col xs={12}>
          <div className="flex-center-content justify-space-between">
            <h1 className="header-font mb-0">{props.title}</h1>
          </div>
          <hr className="bg-dark" />
        </Col>
      </Row>
      <Row>
      <Col xs={0} lg={2} />
      <Col xs={12} lg={8}>
        {pageContent.map((block) => {
          if (block.type == "image") {
            return (<div className="w-100 text-center my-3">            
                      <Image fluid src={block.content}  />
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
          } else if (block.type == "pdf") {
            return <PDF fileURL={block.content}></PDF>
          }
        })}
      </Col>
      <Col xs={0} lg={2} />
      </Row>
    </div>
  );
}
