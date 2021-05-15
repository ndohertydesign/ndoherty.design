import React, { Component } from 'react'
import '../styling/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="custom-navbar d-flex justify-space-between align-items-center">
      <h3 className="nav-title">NDOHERTY.DESIGN</h3>
      <a className="custom-primary-btn" href="#">
        <i className="fas fa-home"></i>
      </a>
      </div>
    )
  }
}
