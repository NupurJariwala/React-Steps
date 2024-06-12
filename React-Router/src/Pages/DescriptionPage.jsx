import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const DescriptionPage = () => {
  const [productdata, setProductdata] = useState([]);
  const [loading, setLoding] = useState(false);

  // const value = useParams();
  // console.log(value);

  const { id } = useParams();
  useEffect(() => {
    setLoding(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductdata(data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return loading ? (
    <h3 style={{ textAlign: "center" }}>
      <Spinner animation="border" variant="primary" size="xl" />
    </h3>
  ) : (
    <div>
      <h1>DescriptionPage</h1>
      <div className="d-flex justify-content-center ">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={productdata.image}
            style={{ height: "300px", width: "100%" }}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>{productdata.title}</Card.Title>
            <Card.Text>{productdata.description}</Card.Text>
            <Card.Text>{productdata.category}</Card.Text>
            <Card.Text>{productdata.price}</Card.Text>
            <Card.Text>{productdata?.rating?.rate}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DescriptionPage;
