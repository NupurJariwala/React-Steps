import { useContext } from "react";
import "./App.css";
import Midsection from "./Components/Midsection";
import Navbar from "./Components/Navbar";
import { ThemeContex } from "./context/ThemeContex";
function App() {
  const { theme, ToggleThem } = useContext(ThemeContex);
  console.log(theme);
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "gray",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <Navbar />
        <Midsection />
      </div>
      <button onClick={ToggleThem}>ChnageTHEME</button>
    </>
  );
}

export default App;
