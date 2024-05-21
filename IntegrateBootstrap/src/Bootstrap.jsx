import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
function Bootstrap() {
  return (
    <div>
      <Container>
        <Row className="text-left m-5 ">
          <Col xs={6} md={6} lg={6} sm={6}>
            <h1>Hi,Hi,I'm Nupur Jariwala</h1>
            <br />
            <h5 className="text-secondary">
              A Web developer from Surat .I convert custom
              <br /> web designer to bootstrap templates.
            </h5>
            <br />
            <h5 className="text-secondary">
              I make YOUTUBE videos and write Blog.
            </h5>
            <br />
            <button type="button" className="btn btn-primary">
              I'M AVAILABLE
            </button>
            <br />
            <br />
            <FaFacebookF className="text-secondary m-2" />
            <FaTwitter className="text-secondary m-2" />
            <RiInstagramFill className="text-secondary m-3" />
            <BiSupport className="text-secondary m-2" />
          </Col>
          <Col xs={6} md={6} lg={6} sm={6}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg"
              width="300px"
              height="300px"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bootstrap;
