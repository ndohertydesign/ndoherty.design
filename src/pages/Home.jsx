import React from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import OtherProjects from "../sections/OtherProjects";
import ScrollingHeader from "../sections/ScrollingHeader";
import Contact from "../sections/Contact";
import About from "../sections/About";

export default function Home(props) {

  console.log(props.dynamicContent.intro_copy)

  return (
    <div>
      <ScrollingHeader headerImages={props.dynamicContent.intro_copy['header-images']}  />
      <About introCopy={props.dynamicContent.intro_copy} />
      <FeaturedProjects featuredProjects={props.dynamicContent.projects['Featured-Projects']} />
      <OtherProjects projectTeasers={props.dynamicContent.projects['Other-Projects']} />
      <Contact />
    </div>
  );
}
