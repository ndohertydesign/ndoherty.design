import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HashLoader } from "react-spinners/";

import Home from "./pages/Home";
import Footer from "./sections/Footer";

import "./styling/typography.css";
import "./styling/utilities.css";
import "./styling/contact.css";
import Blog from "./components/blog/Blog";
import ProjectPage from "./components/ProjectPage";

function NDOHERTY_DESIGN() {
  const scrollFunction = function () {
    window.scrollTo(0, 0);
  };

  window.addEventListener("hashchange", scrollFunction);
  window.addEventListener("beforeunload", scrollFunction);

  const [dynamicContent, setDynamicContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetch("https://ndohertydesign-api.herokuapp.com/ndohertydesign/dynamic-content/")
      .then((response) => response.json())
      .then((content) => {
        setDynamicContent(content)
        setLoading(false)
      })
    }
  });

  if (loading) {
    return <div style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div className="text-center">
                <HashLoader
                  size={100}
                  color="#ffc107"
                  loading={true}
                />
                <p className="mt-3 paragraph-font">Loading...</p>
              </div>
           </div>
  }

  return (
    <Container className="mt-3">
      <Router>
        <Switch>
          <Route 
          exact 
          path="/"
          render={(props) => (
            <Home {...props} dynamicContent={dynamicContent}/>
          )}/>

          {dynamicContent.projects.featuredProjects.map((projectContent) => 
                  (<Route 
                    exact={true}
                    path={projectContent.routinglink}
                    render={(props) => (
                      <ProjectPage {...props} pageID={projectContent.id} title={projectContent.name}/>
                    )}/>)
          )}

          {dynamicContent.projects.projectTeasers.map((projectContent) => {
            return <Route 
                    exact={true}
                    path={projectContent.routinglink}
                    render={(props) => (
                      <ProjectPage {...props} pageID={projectContent.id} title={projectContent.name}/>
                    )}/>
          })}
        <Route exact path="/blog" component={Blog} /> 
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default NDOHERTY_DESIGN;
