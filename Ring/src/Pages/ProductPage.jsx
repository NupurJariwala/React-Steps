import { Container, Row, ThemeProvider } from "react-bootstrap";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Main.css";
const ProductPage = () => {
  console.log(ProductPage);
  const [productdata, setProductdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((res) => res.json())
      .then((data) => {
        setProductdata(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div>
        <Container fluid xxxl xxl xl lg md sm xs xxs>
          <Row width="100%">
            <h1 className="text-bg-primary m-5" style={{ textAlign: "center" }}>
              ProductPage
            </h1>
          </Row>
          <Row width="100%">
            <div
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "20px",
                border: "0px",
                paddingTop: "30px",
                marginLeft: "60px",
              }}
            >
              {productdata.map((el) => (
                // eslint-disable-next-line react/jsx-key
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={el.image} />
                  <Card.Body>
                    <Card.Title>{el.price}</Card.Title>
                    <Card.Text>{el.id}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
