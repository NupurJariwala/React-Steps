import "../Pages/Main.css";
export const Buttons = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        marginLeft: "50px",
        marginTop: "10px",
      }}
    >
      <button style={{ borderRadius: "10px" }}>ALL</button>
      <button style={{ borderRadius: "10px" }}>Try at Home</button>
      <button style={{ borderRadius: "10px" }}>Design in Store</button>
      <button style={{ borderRadius: "10px" }}>Faster Delivery</button>
      <button style={{ borderRadius: "10px" }}>New In</button>
    </div>
  );
};
