import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="header-font mt-5">About Me</h1>
       
        <Row className="mt-5 mx-0">
          <Col xs={12} lg={8} className="px-0">
            <div className="mb-5">
              <h3 className="sub-header-font">Who am I?</h3>
              {this.props.introCopy.whoAmIText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
            </div>
            
            <div className="mb-5">
              <h3 className="sub-header-font">What do I do?</h3>
              {this.props.introCopy.whatIDoText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
            </div>
            
            <div className="">
              <h3 className="sub-header-font">How can I help you?</h3>
              {this.props.introCopy.howCanIHelpText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
            </div>
          </Col>
          <Col xs={0} lg={4} />
        </Row>
      </div>
    )
  }
}
