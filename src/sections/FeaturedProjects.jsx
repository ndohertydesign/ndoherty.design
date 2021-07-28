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
            <div key={index} className="featured-project-card" style={{width: "100%", minHeight: "600px", borderBottom: "6px solid black", padding: "30px", display: "flex", justifyContent: "space-between", flexWrap: "wrap-reverse"}}
                  onClick={this.handleProjectLink(projectInfo.routinglink)}>
              <div className="featured-project-text">
                <h3 className="sub-header-font project-title">{projectInfo.name}</h3>
                
                
                <p className="paragraph-font mb-3">
                  {projectInfo.description}
                </p>

                <div className="d-flex flex-wrap">
                  {projectInfo.tags.map((tag) => 
                    <span style={{padding: ".1rem .3rem", marginRight: ".3rem", marginBottom: ".5rem", fontSize: "8pt", backgroundColor: "black", color: "white", borderRadius: "4pt"}} >
                      {tag}
                    </span>
                  )}
                </div>
              </div>
              <Image className="featured-project-img" src={projectInfo.image[0]} />
            </div>
            )
        })}
      </div>
    );
  }
}