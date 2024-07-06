import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: "#4F3267",
          height: "30px",
          color: "white",
        }}
      >
        <marquee direction="down" scrollAmount="3" height="30px">
          <p style={{ textAlign: "center", paddingTop: "10px" }}>
            CaratLane - A Tanishq Partnership
            <br />
            <br />
            Introducing CaratLane PoP! Plan your purchase <nbsp />
            <nbsp />
            <nbsp />
            <Link to="" style={{ color: "pink" }}>
              here
            </Link>
          </p>
        </marquee>
      </Container>
    </div>
  );
};

export default Header;
