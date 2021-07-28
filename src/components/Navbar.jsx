import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import '../styling/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="custom-navbar">
        <Container className="d-flex nav-container justify-content-center align-items-center">
          <a className="custom-nav-link" href="#"><h3 className="nav-title">NDOHERTY.DESIGN</h3></a>
        </Container>
      </div>
    )
  }
}
