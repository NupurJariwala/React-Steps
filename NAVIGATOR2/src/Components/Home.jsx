import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <div>
      <Container fluid>
        <marquee direction="left" scrollAmount="7" height="40px">
          <h5 style={{ color: "#2874A6" }}>
            Appliances for your home | Up to 55% off Revamp your home in style
            Starting ₹99 | Amazon Brands & more Automotive essentials | Up to
            60% off
          </h5>
        </marquee>
        <Carousel>
          <Carousel.Item>
            <Image
              src="/2.jpg"
              rounded
              style={{ width: "100%", height: "300px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/3.jpg"
              rounded
              style={{ width: "100%", height: "300px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/4.jpg"
              rounded
              style={{ width: "100%", height: "300px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/5.jpg"
              rounded
              style={{ width: "100%", height: "300px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/6.jpg"
              rounded
              style={{ width: "100%", height: "300px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/3.jpg"
              rounded
              style={{ width: "100%", height: "500px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container fluid style={{ marginTop: "15px" }}>
        <h1>Related to items you've viewed</h1>
        <Carousel>
          <Carousel.Item>
            <Image
              src="/8.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/9.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/10.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/11.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/12.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/13.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/14.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/14.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/11.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/12.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/13.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/14.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/15.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/16.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/17.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/18.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/19.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="15.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
            <Image
              src="/13.jpg"
              rounded
              style={{ width: "10%", height: "200px", marginRight: "30px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;
