import React from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import OtherProjects from "../sections/OtherProjects";

export default function Home(props) {

  console.log(props.dynamicContent.intro_copy)

  return (
    <div>

      <h1 className="main-title header-font mt-5">My Projects</h1>
  

      <FeaturedProjects featuredProjects={props.dynamicContent.projects['Featured-Projects']} />
    </div>
  );
}
