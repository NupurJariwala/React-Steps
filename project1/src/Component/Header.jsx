function Header() {
  const header = {
    width: "60%",
    height: "100px",
    border: "2px solid green",
    margin: "auto",
    textAlign: "center",
    marginBottom: "10px",
  };
  return (
    <div>
      <div style={header}>
        <h1 style={{ margin: "auto", width: "200px" }}>Header</h1>
        <nav style={{ margin: "auto", width: "400px" }}>
          <ul style={{ display: "flex" }}>
            <li style={{ marginRight: "20px" }}>
              <a href="/">Home</a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a href="/about">About</a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a href="/services">Services</a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
