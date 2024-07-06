import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

function StaticExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

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
            <Card.Img
              variant="top"
              src="../6.jpg"
              style={{
                margin: "auto",
                height: "100px",
                width: "100px",
              }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <h4>Verify your mobile</h4>
              </Card.Title>
              <Card.Text style={{ fontSize: "13px", textAlign: "center" }}>
                For International numbers, the OTP will be
                <br />
                shared only via whatsapp
              </Card.Text>
              <div>
                <button style={{ marginLeft: "60px", height: "50px" }}>
                  +91
                </button>
                <input
                  type="tel"
                  placeholder="PhoneNumber"
                  maxLength={10}
                  style={{
                    height: "50px",
                    borderRadius: "10px",
                    marginLeft: "5px",
                    backgroundColor: "#F7F9F9 ",
                    border: "1px solid #F7F9F9",
                    fontWeight: "600",
                  }}
                />
              </div>
              <br />

              <button
                style={{
                  width: "360px",
                  background:
                    "linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))",
                  cursor: "pointer",
                  fontWeight: "400",
                  color: " rgb(255, 255, 255)",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  height: "50px",
                }}
              >
                SEND OTP{" "}
              </button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StaticExample;
