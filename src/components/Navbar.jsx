import React, { Component } from 'react'
import '../styling/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="custom-navbar d-flex justify-space-between align-items-center">

        <a className="custom-nav-link" href="#"><h3 className="nav-title">NDOHERTY.DESIGN</h3></a>
     

        <a className="custom-nav-link" href="https://shop.ndoherty.design">
          <p className="paragraph-font m-0 ml-3"> &#8594; MY SHOP</p>
        </a>

      
      </div>
    )
  }
}
