import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class FeaturedProjects extends Component {


  handleProjectLink(link) {
    return () => {
      window.location.href = `#${link}`
    }
  }


  render() {
    return (
      <div>

        {this.props.featuredProjects.map((projectInfo, index) => {
          return (
            <div key={index} className="featured-project-card" onClick={this.handleProjectLink(projectInfo.routinglink)}>
                  <Image className="featured-project-img" src={projectInfo.image[0]} />
              <div className="featured-project-text">
                <h3 className="sub-header-font project-title">{projectInfo.name}</h3>
                
                <p className="paragraph-font mb-3">
                  {projectInfo.description}
                </p>
              </div>
            </div>
            )
        })}
      </div>
    );
  }
}