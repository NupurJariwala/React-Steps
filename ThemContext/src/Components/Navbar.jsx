import { useContext } from "react";
import { ThemeContex } from "../contexts/ThemeContex";
const Navbar = () => {
  const { theme } = useContext(ThemeContex);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>hghb</h1>
    </div>
  );
};
export default Navbar;
