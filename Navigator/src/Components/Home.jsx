import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const Home = () => {
  return (
    <div>
      <Container fluid>
        <marquee direction="left" scrollAmount="3" height="40px">
          <h5 style={{ color: "#2874A6" }}>
            As a website designer we provide affordable website design services
            to our clients all over the world with best services. Our services
            include; small business website design services.
          </h5>
        </marquee>
        <Image
          src="/1.jpg"
          rounded
          style={{ width: "100%", height: "500px" }}
        />
      </Container>
    </div>
  );
};

export default Home;
