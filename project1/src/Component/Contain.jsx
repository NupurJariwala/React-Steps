function Contain() {
  const container = {
    width: "60%",
    height: "300px",
    border: "2px solid blue",
    margin: "auto",
    textAlign: "center",
  };
  return (
    <div>
      <div style={container}>
        <h1 style={{ color: "red" }}>Container</h1>
      </div>
    </div>
  );
}

export default Contain;
