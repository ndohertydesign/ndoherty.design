import React, { Component } from "react";
import BlogPost from "../BlogPost";
import { Image, Row, Col } from "react-bootstrap";

export default class shapeExerciseCritiquePost extends Component {
  render() {
    return (
      <BlogPost title="Shape Exercise Critique" date="07/16/2020">
        <Row>
          <Col className="sticky-col p-3" sm={12} md={7}>
            <Image
              fluid
              src="https://ik.imagekit.io/ndohertydesign/blog-media/shape-critique_93DHp0UuR3.png"
            />
          </Col>
          <Col className="p-3 scrolling-col" xs={12} md={5}>
            <p className="paragraph-font">
              This composition is screaming for my eyes to move from the top
              right to the bottom left. I for sure start at the star in the top
              right, but the hierarchy of what I move to next is a little vague.
              I think that it would be the waterfall looking lines, but I cold
              also argue that the lines in the bottom right are bolded enough to
              jump to next. Maybe thinning them out a little could help with the
              hierarchy of the composition as a whole. But overall, the focal
              and entry point of the star, the waterfall going down, and the
              other lines pointing to the bottom left set a really clear
              direction and path for the composition of these elements. The star
              itself even mainly points in that same direction by cutting off
              the corners that point in the other direction.
            </p>
            <p className="paragraph-font">
              While the direction in this piece is really good, I feel that you
              could have used shape properties a little bit better in this. For
              example when I mention that the star already points in the same
              direction of the overall direction, maybe you could have another
              shape to point downwards and have used that in the waterfall to
              really enforce the downwards motion. Another thing that you could
              have played with is using more organic shapes in this composition
              to contrast the sharpness of the star. It would fit on the side of
              the waterfall where you used the curvy lines, and almost create a
              half organic, half rectilinear composition with some interesting
              balance. Right now the visuals are dominated by this star, which
              isn't necessarily a bad thing, but I feel that you may have been
              able to balance it better by using more shapes instead of lines.
            </p>
          </Col>
        </Row>
      </BlogPost>
    );
  }
}
