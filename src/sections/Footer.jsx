import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          className="social-icon"
          href="https://www.instagram.com/ndoherty.design/"
          target="_blank"
        >
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          className="social-icon"
          href="https://www.facebook.com/ndoherty.design/"
          target="_blank"
        >
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
      </div>
    );
  }
}
