import { useState } from "react";

function JSONpost() {
  const [img, setimg] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [dscptn, setdscptn] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    let productdata = {
      title: title,
      price: price,
      description: dscptn,
      image: img,
    };
    console.log(productdata);

    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productdata),
    })
      .then((response) => {
        console.log(response);
        alert("data added");
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        alert("something something");
      });
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          name="img"
          onChange={(e) => setimg(e.target.value)}
          placeholder="image link"
          style={{
            marginRight: "5px",
            width: "500px",
            height: "30px",
            fontSize: "20px",
          }}
        />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => settitle(e.target.value)}
          style={{
            marginRight: "5px",
            width: "300px",
            height: "30px",
            fontSize: "20px",
          }}
        />
        <input
          type="num"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
          style={{ marginRight: "5px", height: "30px", fontSize: "20px" }}
        />
        <input
          type="text"
          onChange={(e) => setdscptn(e.target.value)}
          placeholder="description"
          style={{
            marginRight: "5px",
            width: "600px",
            height: "30px",
            fontSize: "20px",
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default JSONpost;
