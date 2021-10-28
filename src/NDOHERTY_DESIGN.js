import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HashLoader } from "react-spinners/";

import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./styling/typography.css";
import "./styling/utilities.css";
import "./styling/contact.css";
import "./styling/animations.css";
import GenericNotionPage from "./components/GenericNotionPage";
import Navbar from "./components/Navbar";
import SidebarContainer from "./components/SidebarContainer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

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
        console.log(content)
        setLoading(false)
      })
    }
  });

  if (loading) {
    return <div style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
              <p className="mt-4 loading-font">Loading...</p>
           </div>
  }

  dynamicContent.projects['Featured-Projects'] = dynamicContent.projects['Featured-Projects'].filter((project) => project['Published?'])
  dynamicContent.projects['Featured-Projects'].sort((firstProj, secondProj) => firstProj.order - secondProj.order)


  dynamicContent.projects['Other-Projects'] = dynamicContent.projects['Other-Projects'].filter((project) => project['Published?'])

  dynamicContent.blog_posts['Blog-Posts'] =  dynamicContent.blog_posts['Blog-Posts'].filter((blogPost) => blogPost['Published?'])

  return (
    <div className="website-margin">
    <Navbar />
      <Router>
          <Switch>
            <Route 
            exact 
            path="/"
            render={(props) => (
              <Home {...props} dynamicContent={dynamicContent}/>
            )}/>

            <Route
            exact
            path="/about"
            render={(props) => (
              <About {...props} introCopy={dynamicContent.intro_copy}/>
            )}/>

            <Route
            exact
            path="/contact"
            component={Contact}
            />

            <Route
            exact
            path="/blog"
            render={(props) => (
              <Blog {...props} blogPosts={dynamicContent.blog_posts['Blog-Posts']}/>
            )}/>

            {dynamicContent.projects['Featured-Projects'].map((projectContent) => 
                    (<Route 
                      exact={true}
                      path={projectContent.routinglink}
                      render={(props) => (
                        <GenericNotionPage {...props} pageID={projectContent.id} title={projectContent.name}/>
                      )}/>)
            )}

            {dynamicContent.projects['Other-Projects'].map((projectContent) => {
              return <Route 
                      exact={true}
                      path={projectContent.routinglink}
                      render={(props) => (
                        <GenericNotionPage {...props} pageID={projectContent.id} title={projectContent.name}/>
                      )}/>
            })}

            {dynamicContent.blog_posts['Blog-Posts'].map((blogPost) => {
              console.log(blogPost)
              return <Route 
                      key={blogPost.id}
                      exact={true}
                      path={"/blog" + blogPost.routinglink}
                      render={(props) => (
                        <GenericNotionPage {...props} pageID={blogPost.id} title={blogPost.Name}/>
                      )}/>
            })}
          </Switch>
        </Router>
    </div>
  );
}

export default NDOHERTY_DESIGN;
