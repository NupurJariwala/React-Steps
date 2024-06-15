import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Patch = () => {
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 7;
    axios
      .patch(`http://localhost:8000/product/${id}`, {
        price,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to={"/"}>
        <Button variant="primary">Home</Button>
      </Link>
      <h1>Update Product</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Patch;
