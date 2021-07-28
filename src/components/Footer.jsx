import React, { Component } from "react";
import { Container } from "react-bootstrap";

import '../styling/footer.css'

export default class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }
  }

  handleMenuOpenClose() {
    this.setState({menuOpen: !this.state.menuOpen})
  }


  render() {

    if (!this.state.menuOpen) {
      return (
        <div className="custom-footer" onClick={this.handleMenuOpenClose.bind(this)}>
        <Container className="d-flex justify-content-center align-items-center">
          <h3 className="nav-title">MENU</h3>
        </Container>
      </div>)
    } else {
      return (
        <div className="custom-footer open">
        <Container className="d-flex flex-column h-100 align-items-center justify-space-between">
          <h3 className="nav-title">MENU</h3>
          <div className="text-center">
            <a href="#/"><h3 className="nav-title mb-4" onClick={this.handleMenuOpenClose.bind(this)}>PORTFOLIO</h3></a>
            <a href="https://shop.ndoherty.design"><h3 className="nav-title mb-4">DESIGN SHOP</h3></a>
            <a href="#/about"><h3 className="nav-title mb-4" onClick={this.handleMenuOpenClose.bind(this)}>ABOUT</h3></a>
            <a href="#/contact"><h3 className="nav-title mb-4" onClick={this.handleMenuOpenClose.bind(this)}>CONTACT</h3></a>
          </div>
          
          <h3 className="nav-title" onClick={this.handleMenuOpenClose.bind(this)}>EXIT</h3>
        </Container>
      </div>)
    }
   
    
  }
}
