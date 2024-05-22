import { useState } from "react";
import "./Component/Post.css";
import Post from "./Component/Post";

function App() {
  const [data, setdata] = useState([]);
  function Fetchdata() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="btn">
      <button onClick={() => Fetchdata()}>GET POST</button>
      <div className="data">
        {data.map((el) => (
          <Post key={el.id} title={el.title} body={el.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
