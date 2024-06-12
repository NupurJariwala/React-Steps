import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

export const Navigator = () => {
  let links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/product",
      title: "Product",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {links.map((el) => (
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? { color: "#27AE60", textDecoration: "none" }
              : { color: "#2980B9", textDecoration: "none" };
          }}
          key={el.path}
          to={el.path}
        >
          <h5> {el.title}</h5>
        </NavLink>
      ))}
      <Link to="/login">
        <Button varient="success">login</Button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Card
            style={{
              border: "1px solid #D7DBDD",
              padding: "30px",
              margin: "auto",
            }}
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <h4>Sign in</h4>
              </Card.Title>

              <div>
                <label htmlFor="">Email or mobile phone number</label>
                <input
                  type="text"
                  style={{
                    border: "1px solid black",
                    width: "400px",
                    borderRadius: "5px",
                  }}
                />
                <label htmlFor=""> Enter Password</label>
                <input
                  type="text"
                  style={{
                    border: "1px solid black",
                    width: "400px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <br />

              <button
                style={{
                  width: "400px",
                  borderColor: "#F2C200",
                  cursor: "pointer",
                  backgroundColor: "#F7CA00",
                  borderRadius: "5px",
                }}
              >
                Continue{" "}
              </button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Navigator;
