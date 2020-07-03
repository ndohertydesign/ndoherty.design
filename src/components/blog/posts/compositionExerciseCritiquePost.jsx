import React, { Component } from "react";
import BlogPost from "../BlogPost";
import { Image, Row, Col } from "react-bootstrap";

export default class compositionExerciseCritiquePost extends Component {
  render() {
    return (
      <BlogPost>
        <Row>
          <Col>
            <h1 className="header-font mb-0">Composition Exercise Critique</h1>
            <p className="paragraph-font">07/02/2020</p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col className="sticky-col p-3" sm={12} md={7}>
            <Image
              fluid
              src="https://ik.imagekit.io/ndohertydesign/blog-media/composition-critique_H8apo5hsHP.jpg"
            />
          </Col>
          <Col className="p-3 scrolling-col" xs={12} md={5}>
            <p className="paragraph-font">
              I like the focal point of the bridge, but I feel that you could
              direct the viewer's eye a lot better than this. It feels a little
              misleading to look at. I started with my eyes on the bridge and
              followed the path towards the top of the photo, only to find that
              there isn't much to look at back there. Once I realized that I
              came back to the bridge and noticed the arrow pointing towards the
              bottom of the image. This confused me a little bit because it
              directs my eyes to the bottom, but there isn't really anything to
              look at there. I'm not sure what was behind you when taking this
              photo, but maybe incorporating that arrow into the shot in the
              other direction to move the viewer's eye to a different focal
              point could have been a good choice of the composition with the
              path, bridge, and arrow in this area.
            </p>
            <p className="paragraph-font">
              Another thing that I noticed and thought of is that when taking
              this photo, one thing you maybe could have done was taken it from
              a lower angle to add more space in the photo using the sky. This
              way you can frame the bridge focal point easier, and still use the
              path / arrow to direct the viewer's attention. Right now it feels
              very full with the rocks, water, and the treeline along the path
              in the distance of the composition. I think it adds some extra
              details and areas in the photo that grab your eyes and move you
              away from the bridge. I find myself almost trying to focus on the
              treeline more because it is cut off. I think the water is a good
              addition to have in the photo as well, the texture of it adds a
              lot to the photo and it reinforces that the focus is the bridge,
              maybe you could have included more of that in the photo as well.
            </p>
          </Col>
        </Row>
      </BlogPost>
    );
  }
}
