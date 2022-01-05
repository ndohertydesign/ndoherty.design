import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import '../styling/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="custom-navbar">
          <a className="custom-nav-link" href="#"><h3 className="nav-title fw-300">Portfolio</h3></a>
          <a className="custom-nav-link" href="#/about"><h3 className="nav-title fw-300">About</h3></a>
          {/*<a className="custom-nav-link" href="#/blog"><h3 className="nav-title fw-300">Blog</h3></a>*/}
          <a className="custom-nav-link" href="#/contact"><h3 className="nav-title fw-300">Contact</h3></a>
      </div>
    )
  }
}
