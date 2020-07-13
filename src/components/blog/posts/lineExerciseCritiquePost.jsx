import React, { Component } from "react";
import BlogPost from "../BlogPost";
import { Image, Row, Col } from "react-bootstrap";

export default class lineExerciseCritiquePost extends Component {
  render() {
    return (
      <BlogPost title="Line Exercise Critique" date="07/12/2020">
        <Row>
          <Col className="sticky-col p-3 flex-center-content" sm={12} md={7}>
            <Image
              fluid
              style={{ maxWidth: "50%" }}
              src="https://ik.imagekit.io/ndohertydesign/blog-media/line-critique-1_z--ka0yaU.png"
            />
          </Col>
          <Col className="p-3 scrolling-col" xs={12} md={5}>
            <p className="paragraph-font">
              For this first composition, I feel like you did a great job using
              the rectilinear lines to direct the viewer's eye in the upwards
              direction to the more natural lines. The heavier weight of these
              lines that first brings your eye to the area combined with the
              angles make it look like the perspective of looking up at a
              building. It's also interesting with how the lines are not
              perfectly lined up to one another in some cases, and how some of
              the squares are missing from the grid like structure. It adds some
              depth to these lines themselves instead of just having them as a
              tool to move the viewer's eyes upwards towards the flower lines.
            </p>
            <p className="paragraph-font">
              The flower lines themselves also are well put together and placed.
              There is a little bit of tension on the right side that reinforces
              the idea that this grid structure is supposed to move you to this
              area of the composition. Overall it's a very well balanced
              composition and highlights the differences in the types of lines
              quite well.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="sticky-col p-3 flex-center-content" sm={12} md={7}>
            <Image
              fluid
              style={{ maxWidth: "50%" }}
              src="https://ik.imagekit.io/ndohertydesign/blog-media/line-critique-2_LFSbYihVg.png"
            />
          </Col>
          <Col className="p-3 scrolling-col" xs={12} md={5}>
            <p className="paragraph-font">
              For this line composition, I feel that these two elements could
              have been placed together better than its current state. The lines
              from the tower bring my eyes directly upwards like the last
              composition, but there is not as much of a reinforcement that the
              next thing I should jump to is the flower lines. It feels a little
              far away, or that the tower lines almost point in the wrong
              direction, not at the flowers.
            </p>
            <p className="paragraph-font">
              Maybe moving the tower closer or even into the flower would help
              to reinforce this direction in the composotion, as well as remove
              some of the extra space in the composition. Another idea is to
              maybe replicate the flower lines with smaller flowers getting
              bigger as they move up along the tower in the composition,
              reinforcing the direction of the tower while also having the
              flower elements closer to the tower focal point to make the jump
              between the two types of elements easier.
            </p>
          </Col>
        </Row>
      </BlogPost>
    );
  }
}
