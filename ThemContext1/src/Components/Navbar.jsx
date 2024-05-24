import { useContext } from "react";
import { ThemeContex } from "../context/ThemeContex";
import { AuthContex } from "../context/AuthContex";
function Navbar() {
  const { theme } = useContext(ThemeContex);
  const { isauth, login, logout } = useContext(AuthContex);
  return (
    <div>
      <h1>Navbar</h1>
      <h3>Theme is {theme}</h3>
      <h4>User is {isauth ? " Login" : "Logout"}</h4>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
