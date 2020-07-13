import React, { Component, lazy, Suspense } from "react";
import { Row, Col } from "react-bootstrap";

import BlogPostList from "./posts/postManifest.json";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBlogPost: BlogPostList[0].componentCode,
    };
  }

  getBlogPost(postName) {
    return lazy(() =>
      import(`./posts/${postName}Post.jsx`).catch(() =>
        import(`./posts/NullPost.jsx`)
      )
    );
  }

  render() {
    const BlogPostComponent = this.getBlogPost(this.state.currentBlogPost);

    return (
      <div>
        <Row>
          <Col xs={12}>
            <div className="flex-center-content justify-space-between">
              <h1 className="header-font mb-0 blog-title">
                NDOHERTY.DESIGN BLOG
              </h1>
              <a className="custom-primary-btn" href="#">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <hr className="bg-dark mb-0" />
          </Col>
        </Row>

        <Row className="py-4" style={{ overflowX: "scroll" }}>
          <Col>
            <div className="d-flex">
              {BlogPostList.map((blogPost) => {
                return (
                  <div
                    className={`text-center mx-3 blog-title-select${
                      this.state.currentBlogPost == blogPost.componentCode
                        ? " blog-title-selected"
                        : ""
                    }`}
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        currentBlogPost: blogPost.componentCode,
                      });
                    }}
                  >
                    <h3 className="sub-header-font blog-title mb-0">
                      {blogPost.title.toUpperCase()}
                    </h3>
                    <p className="mb-0 blog-date-header">{blogPost.date}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <hr className="bg-dark mt-0" />

        <Suspense fallback="Loading blog post...">
          <BlogPostComponent />
        </Suspense>
      </div>
    );
  }
}
