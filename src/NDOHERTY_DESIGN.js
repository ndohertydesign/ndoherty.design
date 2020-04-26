import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import DearRuggles from "./pages/DearRuggles";
import Footer from "./sections/Footer";

import "./styling/typography.css";
import "./styling/utilities.css";
import "./styling/contact.css";
import SocialMirrors from "./pages/SocialMirrors";
import PlaylistNinja from "./pages/PlaylistNinja";
import StewardshipApp from "./pages/StewardshipApp";
import MusicArtistCollages from "./pages/MusicArtistCollages";

function NDOHERTY_DESIGN() {
  window.addEventListener("hashchange", () => {
    window.scrollTo(0, 0);
  });

  return (
    <Container className="mt-3">
      <Router>
        {" "}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dear-ruggles" component={DearRuggles} />
          <Route exact path="/social-mirrors" component={SocialMirrors} />
          <Route exact path="/playlist-ninja" component={PlaylistNinja} />
          <Route exact path="/stewardship-app" component={StewardshipApp} />
          <Route
            exact
            path="/artist-collages"
            component={MusicArtistCollages}
          />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default NDOHERTY_DESIGN;
