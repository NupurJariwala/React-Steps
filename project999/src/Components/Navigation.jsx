// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Navigation = () => {
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
    {
      path: "/description",
      title: "Description",
    },
  ];
  return (
    <div>
      <Navigation />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link> */}
        {links.map((el) => (
          // eslint-disable-next-line react/jsx-key
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "blue", textDecoration: "none" }
                : { color: "black", textDecoration: "none" };
            }}
            key={el.path}
            to={el.path}
          >
            {el.title}
          </NavLink>
        ))}
        <Link to="/login ">
          <Button varient="success">login</Button>
        </Link>
        <Link to="/logout ">
          <Button varient="success">logout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
