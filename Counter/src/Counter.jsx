import { useState } from "react";

export default function Counter() {
  const [value, setvalue] = useState(0);
  return (
    <div
      key="counter"
      style={{
        height: "400px",
        width: "400px",
        margin: "auto",
        border: "2px solid teal",
      }}
    >
      <h1
        style={{
          fontFamily: "Bubblegum Sans, sans-serif",
          marginTop: "10px",
          paddingTop: "40px",
          marginLeft: "130px",
        }}
      >
        COUNTER
      </h1>
      <h1 style={{ fontSize: "100px", marginLeft: "180px" }}>{value}</h1>
      <div key="button" style={{ display: "flex", marginLeft: "50px" }}>
        <button
          onClick={() => setvalue(value - 1)}
          style={{
            backgroundColor: "red",
            marginRight: "20px",
            color: "white ",
          }}
        >
          DECREMENT
        </button>
        <button
          onClick={() => setvalue(0)}
          style={{
            backgroundColor: "blue",
            marginRight: "20px",
            color: "white ",
          }}
        >
          RESET
        </button>
        <button
          onClick={() => setvalue(value + 1)}
          style={{
            backgroundColor: "green",
            marginRight: "20px",
            color: "white ",
            height: "30px",
          }}
        >
          INCRENEMT
        </button>
      </div>
    </div>
  );
}
