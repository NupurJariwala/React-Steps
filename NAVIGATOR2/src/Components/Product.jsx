import { MdDoubleArrow } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

const Product = () => {
  const [productData, setproductData] = useState([]);
  const [loading, setLoding] = useState(false);

  const FetchProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproductData(res.data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    FetchProduct();
  }, []);
  return loading ? (
    <h3 style={{ textAlign: "center" }}>
      <Spinner animation="border" variant="primary" size="xl" />
    </h3>
  ) : (
    <div>
      <h5 style={{ color: "#27AE60" }}>
        <MdDoubleArrow
          size={30}
          style={{ marginRight: "10px", color: "#2980B9" }}
        />
        Here The Sample of My Product Display Page <br />
        Using Axios Fatch API
      </h5>

      <Container fluid style={{ marginTop: "15px" }}>
        <h1>Related to items you've viewed</h1>
        <Carousel style={{ width: "100%" }}>
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

      <h1>PRODUCT</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        {productData.map((el) => (
          <Link
            to={`/project/${el.id}`}
            key={el.id}
            style={{ border: "2px solid #2980B9" }}
          >
            <p>{el.id}</p>
            <img
              src={el.image}
              alt=""
              title="hii"
              height={"200px"}
              width={"200px"}
              style={{ marginBottom: "10px" }}
            />
            <h5 style={{ color: "#27AE60" }}>{el.title}</h5>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Limited time deal !!</Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button
                  variant="light"
                  disabled
                  style={{ pointerEvents: "none" }}
                >
                  <b>
                    {" "}
                    <span style={{ color: "#2980B9" }}>Price :</span>
                    <FaRupeeSign />
                    {el.price}
                  </b>
                </Button>
              </span>
            </OverlayTrigger>
            <p style={{ color: "#2980B9" }}>
              <b>
                <span style={{ color: "#27AE60" }}>Category: </span>
                {el.category}
              </b>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
