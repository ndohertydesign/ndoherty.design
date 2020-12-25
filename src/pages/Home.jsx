import React, { useState, useEffect } from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import OtherProjects from "../sections/OtherProjects";
import ScrollingHeader from "../sections/ScrollingHeader";
import Contact from "../sections/Contact";
import MyProcess from "../sections/MyProcess";
import { HashLoader } from "react-spinners/";

export default function Home() {

  const [dynamicContent, setDynamicContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetch("http://ndohertydesign-api.herokuapp.com/ndohertydesign/dynamic-content/", {crossDomain: true})
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
    <div>
      <ScrollingHeader introCopy={dynamicContent.intro_copy} />
      <MyProcess processCopy={dynamicContent.process_copy} />
      <FeaturedProjects featuredProjects={dynamicContent.projects.featuredProjects} />
      <OtherProjects projectTeasers={dynamicContent.projects.projectTeasers} />
      <Contact />
    </div>
  );
}
