import React from "react";
import ProjectPage from "../components/ProjectPage";
import { Row, Col, Image } from "react-bootstrap";

export default function PlaylistNinja() {
  return (
    <ProjectPage title="PLAYLIST NINJA">
      <Row>
        <Col xs={12}>
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/playlist-ninja/playlist-stats_uvwtyLT2VF.png"
            className="mb-3"
          />
          <h3 className="sub-header-font">Personal Project - React Web App</h3>
          <a href="https://playlistninja.app" target="_blank">
            <p className="paragraph-font">LIVE WEB APP</p>
          </a>
          <p className="paragraph-font">
            Over summer, my friends and I discovered the Spotify API and the
            extent of the information and actions it allows you to use. The main
            thing we were excited about was the statistics that Spotify has on
            every song on their system. They have energy, danceability, mood,
            and popularity ratings for every song, and we wanted to see what the
            implications of these statistics are when building playlists. We
            figured that if a user could see the stats of their playlist, they
            could control the outcome better and build the playlist to match
            certain stats they would like.
          </p>
          <p className="paragraph-font">
            Thus, PlaylistNinja was born after experimenting with the API. I
            decided to create a frontend-only React app that used the Spotify
            API as a backend for all the actions it took. You can view your
            profile, with your top 6 artists, top 12 songs, and all your
            editable playlists. You can, as mentioned before, see all the
            statistics of your playlist and add songs to move the stats in
            certain directions. The recommendations system that Spotify has in
            the API is super strong, and this app gives you control of the
            recommendations. You can choose target statistics when searching for
            songs to add to your playlists.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} className="flex-center-content flex-column">
          <div className="text-left w-100">
            <h1 className="header-font">Gallery</h1>
            <hr className="bg-dark" />
          </div>

          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/playlist-ninja/playlists_3LSrm_6il_.png"
            className="mb-3"
          />
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/playlist-ninja/top-artists-tracks_wlKxDKXFd9.png"
            className="mb-3"
          />
        </Col>
      </Row>
    </ProjectPage>
  );
}
