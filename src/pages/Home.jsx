import React from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import OtherProjects from "../sections/OtherProjects";
import ScrollingHeader from "../sections/ScrollingHeader";
import Contact from "../sections/Contact";
import MyProcess from "../sections/MyProcess";

export default function Home(props) {
  return (
    <div>
      <ScrollingHeader introCopy={props.dynamicContent.intro_copy} />
      <MyProcess processCopy={props.dynamicContent.process_copy} />
      <FeaturedProjects featuredProjects={props.dynamicContent.projects['Featured-Projects']} />
      <OtherProjects projectTeasers={props.dynamicContent.projects['Other-Projects']} />
      <Contact />
    </div>
  );
}
