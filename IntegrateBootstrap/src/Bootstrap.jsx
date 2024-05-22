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
      <Container className="m-auto" height="700px">
        <Row>
          <Col xs={6} md={6} lg={6} sm={6} className="mt-5">
            <h1>Hi,Hi, I'm Nupur Jariwala</h1>
            <br />
            <h5 className="text-secondary ">
              A Web developer from Surat .I convert custom
              <br /> web designer to bootstrap templates.
            </h5>
            <br />
            <h5 className="text-secondary ">
              I make YOUTUBE videos and write Blog.
            </h5>
            <br />
            <button type="button" className="btn btn-primary m-auto ">
              I'M AVAILABLE
            </button>
            <br />
            <br />
            <FaFacebookF className="text-secondary m-2" />
            <FaTwitter className="text-secondary m-2" />
            <RiInstagramFill className="text-secondary m-3" />
            <BiSupport className="text-secondary m-2" />
          </Col>
          <Col xs={6} md={6} lg={6} sm={6} className=" mr-0 text-right">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png"
              width="400px"
              height="400px"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bootstrap;
