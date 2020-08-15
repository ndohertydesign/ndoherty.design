import React from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import OtherProjects from "../sections/OtherProjects";
import ScrollingHeader from "../sections/ScrollingHeader";
import DesignServices from "../sections/DesignServices";
import Contact from "../sections/Contact";
import MyProcess from "../sections/MyProcess";

export default function Home() {
  return (
    <div>
      <ScrollingHeader />
      <MyProcess />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
    </div>
  );
}
