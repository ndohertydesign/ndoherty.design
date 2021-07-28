import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <div style={{padding: "20px"}}>
      <Row>
        <Col xs={12}>
          <h3 className="sub-header-font">ABOUT ME</h3>
          <hr className="divider mb-5" />
        </Col>
      </Row>
       
      <Row>
        <Col xs={0} lg={2} />
        <Col xs={12} lg={8}>
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
        <Col xs={0} lg={2} />
        </Row>
      </div>
    )
  }
}
