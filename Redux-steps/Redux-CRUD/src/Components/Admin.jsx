import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postdatafun } from "../Redux/Product/Action";

const initialstate = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};
const Admin = () => {
  const [data, setData] = useState(initialstate);
  const { title, price, description, category, image } = data;
  const dispatch = useDispatch();
  const postdata = useSelector((store) => store.productReducer);
  console.log(postdata);
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(postdatafun(data));
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          onChange={(e) => handlechange(e)}
          name="title"
          value={title}
          placeholder="title..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handlechange(e)}
          name="image"
          value={image}
          placeholder="image..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handlechange(e)}
          name="price"
          value={price}
          placeholder="price..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handlechange(e)}
          name="description"
          value={description}
          placeholder="description..."
        />
        <br />
        <br />
        <select name="" value={category} onChange={(e) => handlechange(e)}>
          <option value="category" hidden>
            Category
          </option>
          <option value="men's clothing">Men</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women</option>
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;
