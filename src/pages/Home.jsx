import React from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import OtherProjects from "../sections/OtherProjects";

export default function Home(props) {

  console.log(props.dynamicContent.intro_copy)

  return (
    <div>
      <FeaturedProjects featuredProjects={props.dynamicContent.projects['Featured-Projects']} />
      <OtherProjects projectTeasers={props.dynamicContent.projects['Other-Projects']} />
    </div>
  );
}
