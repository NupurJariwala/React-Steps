import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { IoArrowRedoSharp } from "react-icons/io5";
import Accordion from "react-bootstrap/Accordion";

const About = () => {
  return (
    <div>
      <Container fluid style={{ marginTop: "15px" }}>
        <h3>
          Minimum 40% off | Sofa sets, outdoor furniture & more from stores
          nearby
        </h3>
        <Carousel>
          <Carousel.Item>
            <Image
              src="/31.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/32.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/33.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/34.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/35.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/36.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/37.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/38.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
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
              As a website designer we provide affordable website design
              services to our clients all over the world with best services. Our
              services include; small business website design services
            </h5>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" style={{ color: "#27AE60" }}>
                <Accordion.Header>
                  <b style={{ color: "#2471A3" }}>
                    Define Goal and Requirements
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <b>
                    {" "}
                    At Grswt, we Understand the purpose of the website, its
                    target audience, and the specific goals it needs to achieve.
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
                    structure, and functionality of each page, ensuring
                    intuitive navigation and easy access to information.
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
                    Conduct thorough testing to identify and fix any issues,
                    such as broken links, browser compatibility problems, or
                    usability concerns. Optimize the website’s performance,
                    including page load times and mobile responsiveness.
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
                    Deploy the website on a web hosting platform or server.
                    Ensure proper domain and hosting setup, configure security
                    measures (such as SSL certificates), and monitor the
                    website’s performance.
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
                    content, improving functionality, and addressing any
                    technical issues. Monitor analytics to gain insights into
                    user behavior and make data-driven improvements.
                  </b>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ marginTop: "15px" }}>
        <h3>Deals on furniture & home essentials from stores nearby</h3>
        <Carousel>
          <Carousel.Item>
            <Image
              src="/20.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/22.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/23.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/24.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/25.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/26.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/27.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/28.jpg"
              rounded
              style={{ width: "20%", height: "200px", marginRight: "30px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default About;
