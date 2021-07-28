import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'

export default class SidebarContainer extends Component {

  constructor(props) {
    super(props);

    var activePage = ""

    switch(window.location.hash) {
      case "#/about":
        activePage = "about";
        break;
      case "#/contact":
        activePage = "contact";
        break;
      default:
        activePage = "portfolio"
    }

    this.state = {
      activePage
    }
  }



  render() {
    return (
      <div style={{width: "100%", height: "100vh", paddingTop: "4.4rem", display: "flex", position: "absolute", top: 0, left: 0}}>
      
        <div className="ndd-sidebar" style={{width: "300px", height: "100%", padding: "20px", borderRight: "black 6px solid", boxShadow: "#2b2b2bee 0px 0px 5px 0px"}}>
          <h3 className="sub-header-font mb-0">MENU</h3>
          <hr className="my-2" style={{borderWidth: "3px", borderColor: "black"}} />
          <a className="sidebar-link" onClick={() => {this.setState({activePage: "portfolio"})}} href="#/"><p className="mb-1 paragraph-font italic sidebar-link" style={this.state.activePage === "portfolio" ? {fontWeight: 700, color: "red"} : {}}>PORTFOLIO</p></a>
          <a className="sidebar-link" href="https://shop.ndoherty.design" target="_blank"><p className="mb-1 paragraph-font italic">DESIGN SHOP</p></a>
          <a className="sidebar-link" onClick={() => {this.setState({activePage: "about"})}} href="#/about"><p className="mb-1 paragraph-font italic sidebar-link" style={this.state.activePage === "about" ? {fontWeight: 700, color: "red"} : {}}>ABOUT</p></a>
          <a className="sidebar-link" onClick={() => {this.setState({activePage: "contact"})}} href="#/contact"><p className="mb-1 paragraph-font italic sidebar-link" style={this.state.activePage === "contact" ? {fontWeight: 700, color: "red"} : {}}>CONTACT</p></a>
          <hr className="my-2" style={{borderWidth: "3px", borderColor: "black"}} />
          <Footer />
        </div>
        <div style={{width: "100%", height: "100%", overflowY: "scroll", paddingBottom: "4.5rem"}}> 
          {this.props.children}
        </div>
      </div>
    )
  }
}
