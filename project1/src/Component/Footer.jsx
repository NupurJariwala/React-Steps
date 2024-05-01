function Footer() {
  const footer = {
    width: "60%",
    height: "100px",
    border: "2px solid purple",
    margin: "auto",
    marginTop: "10px",
    textAlign: "center",
  };
  return (
    <div>
      <div style={footer}>
        <h1 style={{ color: "red" }}>footer</h1>
      </div>
    </div>
  );
}

export default Footer;
