import React from "react";
import ProjectPage from "../components/ProjectPage";
import { Row, Col, Image } from "react-bootstrap";

export default function StewardshipApp() {
  return (
    <ProjectPage title="STEWARDSHIP APP">
      <Row>
        <Col xs={12}>
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/stewardship-app/storyboard_zV2JLbmS5.png"
            className="mb-3"
          />
          <h3 className="sub-header-font">
            Design Class Project - Product Design
          </h3>
          <a
            href="https://docs.google.com/document/d/1hdIJdnPz4SPoB6T_ACqLxtT0KiDcqktUlWYtKQBGDoY/edit?usp=sharing"
            target="_blank"
          >
            <p className="paragraph-font">PROJECT DOCUMENTATION</p>
          </a>
          <p className="paragraph-font">
            One major issue with outdoor stewardship and citizen science is that
            there is a lack of awareness of all the opportunities and events
            that anyone can participate in. Small organizations that create
            these events and opportunities often don’t have the funding or means
            to advertise their plans to people who may be interested. This app
            will be a platform for these organizations to spread awareness about
            their cause and events they may be hosting, so that more people can
            join and give back to their community. In this app, organizations
            would post all relevant information about their plans, whether it be
            a local trail cleanup, tree planting, or simply an educational event
            about their cause. Users on the app can then browse through events
            that are nearby to them, and sign up for these events. After going
            to the event, the organization that hosted can verify that the user
            was there, and the user’s profile will gain some sort of
            “experience” towards badges and other rewards.
          </p>
          <p className="paragraph-font">
            This project was started and worked on during my time in Vancouver
            and Alaska over the summer of 2018. It was completed as part of a
            month long product design assignment, and I learned a lot about
            iterative design and testing.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={6} className="flex-center-content">
          <Image
            fluid
            src="https://ik.imagekit.io/ndohertydesign/stewardship-app/storyboard2_2k_6RG7LvU.png"
            className="mb-3"
          />
        </Col>
        <Col xs={12} md={6}>
          <div>
            <h3 className="sub-header-font">First Prototype</h3>
            <p className="paragraph-font">
              For our first prototype of the app, we wanted a bare bones
              prototype that looked and felt like the app as much as possible,
              so that we could test and refine the experience of using the app
              on potential users. We decided to use Adobe XD, due to the fact
              that we could set up basic functionality of the app (switching
              between screens, pressing buttons, etc) and not have to sink a lot
              of time into development of the prototype. We also decided that
              this was a good program to use since we wanted to test the app
              under similar conditions to someone using it, and Adobe XD lets
              you stream the prototypes to your smartphone, which we did for
              testing.
            </p>
            <p className="paragraph-font">
              While we did learn a lot about the interface design we needed to
              change in the next iteration our app (some buttons in odd places,
              broken links, confusing hiearchy of pages), the testing itself was
              limited. The scope of this prototype was limited by both Adobe XD
              and our design, and that led to some hiccups in the testing
              process, such as a tester trying to press a placeholder button
              that we had put there for looks, but not implemented because of
              the prototype scope. However, we had the reactions and data that
              we needed to continue development of the project.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12}>
          <h3 className="sub-header-font">Second Prototype</h3>
          <p className="paragraph-font">
            For the second prototype, we wanted a more immersive experience that
            is similar to the one we were trying to create, so we wanted to
            create a works-like prototype. It may not look the best, but it
            would function as the app would when put to use. We decided for our
            second prototype we would create the search and signup functions of
            our app, and then have our testers sign up for an event (a hike),
            then participate in the even the next day. Using XCode for the
            prototype app, and JSON on my personal server to save and pdate the
            events used for testing, we were able to have the users sign up
            successfully and then participate in the event.
          </p>
          <p className="paragraph-font">
            For the testing of this second prototype, we broke up the process
            into distinct steps of the user experience. The first step was using
            the app to sign up for an educationl hike the next day. We guided
            the testers through the process so that we could give them
            objectives and recieve feedback from the testers on the spot. Most
            feedback in this step was suggestions on features to add, and what
            should be changed within the existing user interface. The second
            step was for us to send all the tester a reminder notification. We
            did this through a messaging service, since not all testers had the
            app on their phone. We tested two styles, one that required a
            confirmation, and one that did not. The style of reminder didn't
            seem to have any effect on those who showed up. The third step of
            the experience testing was actually participating in the event. This
            was the weak point of the testing, as we don't set up the
            activities, the organizations would. However, being part of the
            experience, we wanted to test it to see how it would affect the
            users. That being said, our "educational hike" wasn't too
            educational as we are not wildlife rangers, but we did our best. The
            last step in the testing process was to give each participant a
            verification notification that they participated in the event. We
            accomplished this with the use of an image we photoshopped together.
            This was a success, and many people said that being able to see the
            other badges and goals, it would motivate them to participate in
            more events.
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
            src="https://ik.imagekit.io/ndohertydesign/stewardship-app/badges_sIERJYiYlk.jpg"
            className="mb-3"
          />
        </Col>
      </Row>
    </ProjectPage>
  );
}
