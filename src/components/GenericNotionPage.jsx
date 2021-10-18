import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { HashLoader } from "react-spinners/";
import PDF from "./PDF";

export default function GenericNotionPage(props) {

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
    return <div style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
              <p className="mt-4 loading-font">Loading...</p>
            </div>
  }

  return (
    <div>
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div className="flex-center-content justify-space-between">
            <h1 className="header-font">{props.title}</h1> 
          </div>
        </Col>
      </Row>
      <Row className="m-0">
      <Col xs={12} lg={8} className="p-0">
        {pageContent.map((block) => {
          if (block.type == "image") {
            return (<div className="w-100 text-center my-5">            
                      <Image fluid src={block.content}  />
                    </div>)
          } else if (block.type == "h1") {
            return <h1 className="header-font mt-3">{block.content}</h1>
          } else if (block.type == "h3") {
            return <h3 className="sub-header-font mt-3">{block.content}</h3>
          } else if (block.type == "p") {
            return <p className="paragraph-font mb-2">{block.content}</p>
          } else if (block.type == "br") {
            return <br />
          } else if (block.type == "a") {
            return <a className="mb-2" href={block.content}><p className="paragraph-font m-0">{block.content}</p></a>
          } else if (block.type == "hr") {
            return <hr className="my-2" style={{borderWidth: "3px", borderColor: "black"}} />
          } else if (block.type == "pdf") {
            return <PDF fileURL={block.content}></PDF>
          }
        })}
      </Col>
      <Col xs={0} lg={4} />
      </Row>
    </div>
  );
}
