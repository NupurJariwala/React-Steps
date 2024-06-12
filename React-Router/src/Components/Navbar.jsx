// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Navbar = () => {
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
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/product",
      title: "Product",
    },
    {
      path: "/description",
      title: "Description",
    },
    {
      path: "/privateroute",
      title: "PrivateRoute",
    },
  ];
  return (
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
      <Link to="/login">
        <Button varient="success">login</Button>
      </Link>
    </div>
  );
};
