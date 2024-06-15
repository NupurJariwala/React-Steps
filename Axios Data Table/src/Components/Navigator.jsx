import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Navigator = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={"/post"}>
          <Button variant="primary">Post Form</Button>
        </Link>

        <Link to={"/patch"}>
          <Button variant="primary">Update Form</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navigator;
