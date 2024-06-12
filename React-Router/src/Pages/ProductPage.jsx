import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function ProductPage() {
  const [productdata, setProductdata] = useState([]);
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductdata(data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return loading ? (
    <h3 style={{ textAlign: "center" }}>
      <Spinner animation="border" variant="primary" size="xl" />
    </h3>
  ) : (
    <div>
      <h1 className="text-bg-primary m-5" style={{ textAlign: "center" }}>
        ProductPage
      </h1>
      <div
        className="m-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        {productdata.map((el) => (
          // eslint-disable-next-line react/jsx-key
          <Link to={`/description/${el.id}`} key={el.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={el.image} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.price}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
