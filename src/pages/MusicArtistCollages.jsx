import React from "react";
import ProjectPage from "../components/ProjectPage";
import { Row, Col, Image } from "react-bootstrap";

export default function MusicArtistCollages() {
  return (
    <ProjectPage title="MUSIC ARTIST EXPERIENCE COLLAGES">
      <Row>
        <Col xs={12}>
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/artist-collages/asap-rocky_xgyDu-a6X2x.jpeg"
            className="mb-3"
          />
          <h3 className="sub-header-font">
            Design Class Project - Observational Drawings
          </h3>
          <p className="paragraph-font">
            As part of a class project to make "drawings" that are an
            observation of our surroundings, I chose to make a collection of
            posters that capture the experience of following and listening to a
            music artist. The collages are made of a few lyrics from the
            artist's songs, and covered in images taken straight from their
            social media.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={8} className="flex-center-content">
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/artist-collages/eden_P2trX1NpP4.jpg"
            className="mb-3"
          />
        </Col>
        <Col xs={12} md={4} className="flex-center-content">
          <div>
            <h3 className="sub-header-font">EDEN</h3>
            <p className="paragraph-font">
              EDEN is my favorite artist of all time, and I find that I listen
              to his music a lot during periods of heavy stress and anxiety in
              my life. This semester I was listening to him, and I love the
              lyrics of his music and the aesthetic of his social media posts,
              so I came up with the idea to collage lyrics and social media with
              this one. I put a heavier focus on his lyrics since that is how I
              listen to his music, and grouped the chosen lyrics near the album
              titles that they are from.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 mobile-col-reverse">
        <Col xs={12} md={4} className="flex-center-content">
          <div>
            <h3 className="sub-header-font">A$AP Rocky</h3>
            <p className="paragraph-font">
              This was the next one in the series that I created, with A$AP
              Rocky being a big inspiration of mine with the visuals and
              aesthetic that he embraces and puts out into the world, so I put a
              heavier focus on the pictures as opposed to the lyrics with the
              EDEN poster.
            </p>
          </div>
        </Col>
        <Col xs={12} md={8} className="flex-center-content">
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/artist-collages/asap-rocky_xgyDu-a6X2x.jpeg"
            className="mb-3"
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={8} className="flex-center-content">
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/artist-collages/kanye_ZtYRgOE1GPL.jpeg"
            className="mb-3"
          />
        </Col>
        <Col xs={12} md={4} className="flex-center-content">
          <div>
            <h3 className="sub-header-font">Kanye West</h3>
            <p className="paragraph-font">
              Kanye is one of the craziest artists of our time, and a huge
              inspiration to me in not letting anyone get in the way of your
              ideas and life. His discography covers a huge period of time and
              so much growth as a human in his life, and there are many lessons
              to learn from it. I wanted to try to encompass how I view him with
              this collage, from more of a designer / artist route that he has
              been focusing on more in the last few years, the side of his
              celebrity that inspires me.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 mobile-col-reverse">
        <Col xs={12} md={4} className="flex-center-content">
          <div>
            <h3 className="sub-header-font">CRYWOLF</h3>
            <p className="paragraph-font">
              CRYWOLF is an artist that is very similar to EDEN. I found him in
              high school, and have been following him ever since. There is a
              big focus in exploring your mental health and the "dark" side of
              your emotions in CRYWOLF's music, which is something that I put a
              lot of energy in to so that I can understand myself better. I love
              his social media aesthetic, and paired with some of his best
              quotes it looks amazing.
            </p>
          </div>
        </Col>
        <Col xs={12} md={8} className="flex-center-content">
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/artist-collages/crywolf_BB9-Ha-zihM.jpeg"
            className="mb-3"
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={8} className="flex-center-content">
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/artist-collages/mac-miller_jnE9DtknGO.jpeg"
            className="mb-3"
          />
        </Col>
        <Col xs={12} md={4} className="flex-center-content">
          <div>
            <h3 className="sub-header-font">Mac Miller</h3>
            <p className="paragraph-font">
              Mac Miller is another rapper inspiration for me, who I really came
              to like during summer 2018. He ended up overdosing about a month
              or two after I started listening to him which, while unfortunate,
              cemented him in my mind as an influential artist after seeing the
              response and made me go back and explore some of his music.
              Obviously, there hasn't been any social media posts from him since
              his passing about a year ago, so the collage has more empty space,
              but it adds to the focus of the quotes and how Mac Miller carried
              himself.
            </p>
          </div>
        </Col>
      </Row>
    </ProjectPage>
  );
}
