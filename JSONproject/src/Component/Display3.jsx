import { useEffect, useState } from "react";

function Display3() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    function Fetchdata() {
      fetch("http://localhost:8080/posts")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    Fetchdata();
  }, [data]);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.map((el) => (
          <div key={el.id} style={{ border: "1px solid teal", margin: "2px" }}>
            <p>{el.id}</p>
            <p>{el.price}</p>
            <p>{el.title}</p>
            <p>{el.description}</p>
            <img src={el.image} alt="" width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display3;
