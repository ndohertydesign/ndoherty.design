import React from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import OtherProjects from "../sections/OtherProjects";
import ScrollingHeader from "../sections/ScrollingHeader";
import DesignServices from "../sections/DesignServices";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div>
      <ScrollingHeader />
      <FeaturedProjects />
      <DesignServices />
      <OtherProjects />
      <Contact />
    </div>
  );
}
