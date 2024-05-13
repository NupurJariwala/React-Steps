import { useEffect, useState } from "react";

function Displaydisplay2() {
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
            <h2>{el.id}</h2>
            <p>{el.name}</p>
            <p>{el.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Displaydisplay2;
