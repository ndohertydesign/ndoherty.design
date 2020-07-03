import React, { Component } from "react";

export default class BlogPost extends Component {
  render() {
    return <div className="my-5">{this.props.children}</div>;
  }
}
