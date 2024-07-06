import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Product = () => {
  const [productData, setproductData] = useState([]);
  const FetchProduct = () => {
    axios
      .get("https://fakestoreapi.com/products", {})
      .then((res) => setproductData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    FetchProduct();
  }, []);
  return (
    <div>
     
      <h1>Welcome</h1>
      <p>This is a Product Application</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        {productData.map((el) => (
          <div key={el.id} style={{ border: "2px solid teal" }}>
            <p>{el.id}</p>
            <img src={el.image} alt="" height={"200px"} width={"200px"} />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
            <p>{el.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
