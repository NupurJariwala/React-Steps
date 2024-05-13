import { useEffect, useState } from "react";

function Displaydata() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    function Fetchdata() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    Fetchdata();
  }, []);

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

export default Displaydata;
