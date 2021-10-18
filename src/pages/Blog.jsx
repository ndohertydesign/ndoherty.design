import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class Blog extends Component {

  handleBlogLink(link) {
    return () => {
      window.location.href = `#${link}`
    }
  }

  renderBlogPosts() {
    if (this.props.blogPosts.length == 0) {
      return <p className="paragraph-font mt-5">Looks like there's no blog posts yet. Check back soon.</p>
    } else {
      return (
        <div>
          {this.props.blogPosts.map((blogPost) => {
            return (<Col xs={12} lg={8} className="blog-post-card px-0" onClick={this.handleBlogLink('/blog' + blogPost.routinglink)}>
                    <h3 className="sub-header-font">
                      {blogPost.Name}
                    </h3>

                    <p className="paragraph-font">
                      {blogPost.Description}
                    </p>
                  </Col>)
          })}
        </div>)
    }
  }

  render() {
    return (
      <div>
        <h1 className="main-title header-font mt-5">My Blog</h1>
        {this.renderBlogPosts()}
      </div>
    )
  }
}
