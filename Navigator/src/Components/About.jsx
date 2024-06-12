import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { IoArrowRedoSharp } from "react-icons/io5";
import Accordion from "react-bootstrap/Accordion";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ color: "#27AE60" }}>About us</h1>
          <h3 style={{ color: "#27AE60" }}>
            <IoArrowRedoSharp
              size={50}
              style={{ marginRight: "20px", color: "#27AE60" }}
            />
            What we do
          </h3>
          <h5 style={{ color: "#2980B9" }}>
            As a website designer we provide affordable website design services
            to our clients all over the world with best services. Our services
            include; small business website design services
          </h5>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={{ color: "#27AE60" }}>
              <Accordion.Header>
                <b style={{ color: "#2471A3" }}>Define Goal and Requirements</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  {" "}
                  At Grswt, we Understand the purpose of the website, its target
                  audience, and the specific goals it needs to achieve.
                  Determine the features, functionality, and content that the
                  website will require for ecommerce website design services.
                </b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={{ color: "#27AE60" }}>
              <Accordion.Header>
                <b style={{ color: "#2471A3" }}>User Experience(UI) Design</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  {" "}
                  Focus on designing a user-friendly experience by creating
                  wireframes or prototypes. This involves creating the layout,
                  structure, and functionality of each page, ensuring intuitive
                  navigation and easy access to information.
                </b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={{ color: "#27AE60" }}>
              <Accordion.Header>
                <b style={{ color: "#2471A3" }}>Testing and Optimization</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  {" "}
                  Conduct thorough testing to identify and fix any issues, such
                  as broken links, browser compatibility problems, or usability
                  concerns. Optimize the website’s performance, including page
                  load times and mobile responsiveness.
                </b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={{ color: "#27AE60" }}>
              <Accordion.Header>
                <b style={{ color: "#2471A3" }}>Launch and Devlopment</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  {" "}
                  Deploy the website on a web hosting platform or server. Ensure
                  proper domain and hosting setup, configure security measures
                  (such as SSL certificates), and monitor the website’s
                  performance.
                </b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={{ color: "#27AE60" }}>
              <Accordion.Header>
                <b style={{ color: "#2471A3" }}>Maintanance and Update</b>
              </Accordion.Header>
              <Accordion.Body>
                <b>
                  {" "}
                  Regularly update and maintain the website by adding new
                  content, improving functionality, and addressing any technical
                  issues. Monitor analytics to gain insights into user behavior
                  and make data-driven improvements.
                </b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
