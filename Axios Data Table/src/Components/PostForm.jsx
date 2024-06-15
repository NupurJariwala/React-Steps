import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostForm = () => {
  // {
  // "id": 1, id created by server
  // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  // "price": 109.95,
  // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  // "category": "men's clothing",
  // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  // "rating": {
  //   "rate": 3.9,
  //   "count": 120
  // }

  let initialvalue = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  };

  const [formdata, setFormdata] = useState(initialvalue);

  const { title, price, description, category, image } = formdata;

  const handleChange = (e) => {
    console.log(e.target.value),
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios
      .post("http://localhost:8000/product", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to={"/"}>
        <Button variant="primary">Home</Button>
      </Link>
      <h1>Post Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label>price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <select
          name="category"
          onChange={(e) => handleChange(e)}
          id=""
          value={category}
        >
          <option hidden>Category</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
        <br />
        <br />
        <label>Enter Image</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => handleChange(e)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default PostForm;
