import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import Quantity from "./Quantity";

const Project = () => {
  const [productdata, setProductdata] = useState([]);

  // const value = useParams();
  // console.log(value);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductdata(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div style={{ border: "2px solid #2980B9" }}>
      <h1 style={{ color: "#27AE60" }}>DescriptionPage</h1>
      <br />
      <Container>
        <Row>
          <Col xs={6}>
            <Card.Img
              variant="top"
              src={productdata.image}
              style={{ height: "500px", width: "100%" }}
            />
          </Col>

          <Col xs={6}>
            <Card.Body>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i
                className="fa fa-star text-warning "
                style={{ marginRight: "5px" }}
              ></i>
              <b className=" text-warning" style={{ marginRight: "5px" }}>
                {productdata?.rating?.rate}
              </b>
              <BsFillBasket2Fill color="#A6ACAF" />
              <b style={{ color: "#A6ACAF" }}>
                154 orders <span style={{ color: "#27AE60" }}>IN Stock</span>
              </b>
              <Card.Title style={{ marginBottom: "5px" }}>
                {productdata.title}
              </Card.Title>
              <Card.Text style={{ color: "#909497", marginBottom: "5px" }}>
                {productdata.description}
              </Card.Text>
              <Card.Text>
                <h6>Category : {productdata.category}</h6>
              </Card.Text>
              <Card.Text>
                <b>Price :</b> <FaRupeeSign /> <b>{productdata.price}</b>
              </Card.Text>
              <Row>
                <dt className="col-3">Type:</dt>
                <dd className="col-9">Regular</dd>

                <dt className="col-3">Color</dt>
                <dd className="col-9">Brown</dd>

                <dt className="col-3">Material</dt>
                <dd className="col-9">Cotton, Jeans</dd>

                <dt className="col-3">Brand</dt>
                <dd className="col-9">Reebook</dd>
              </Row>
              <Container>
                <Row>
                  <Col>
                    <select
                      style={{
                        width: "100px",
                        height: "30px",
                        marginRight: "380px",
                      }}
                    >
                      <option hidden>Size</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p
                      style={{
                        width: "110px",
                        marginRight: "350px",
                        marginTop: "10px",
                      }}
                    >
                      <Quantity />
                    </p>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <a href="#" className="btn btn-warning shadow-0">
              {" "}
              Buy now
            </a>
          </Col>
          <Col>
            <a href="#" className="btn btn-primary shadow-0">
              {" "}
              <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
            </a>
          </Col>
          <Col>
            <a
              style={{ marginBottom: "10px" }}
              href="#"
              className="btn btn-light border border-secondary py-2 icon-hover px-3"
            >
              {" "}
              <i
                className="me-1 fa fa-heart fa-lg"
                style={{ color: "red" }}
              ></i>{" "}
              wishlist{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
