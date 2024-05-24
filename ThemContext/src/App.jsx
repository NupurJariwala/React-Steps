import { useContext } from "react";
import "./App.css";
import MidSection from "./Components/MidSection";
import Navbar from "./Components/Navbar";
import { ThemeContex } from "./contexts/ThemeContex";

function App() {
  const { theme, ToggleThem } = useContext(ThemeContex);
  console.log(theme);

  return (
    <>
      <div
        style={{
          backgroundColor:
            theme === "light" ? "rgb(160,155,138)" : "rgb(56,46,37)",
          color: theme === "light" ? "rgb(56, 46, 37)" : "rgb(160,155,138)",
          height: "400px",
          width: "80%",
          margin: "auto",
          borderRadius: "5px",
        }}
      >
        <Navbar />
        <MidSection />
        <button
          style={{
            background:
              theme === "light" ? "rgb(56,46,37)" : "rgb(160,155,138)",
            color: theme == "light" ? "rgb(160,155,138)" : "rgb(56,46,37)",
          }}
          onClick={ToggleThem}
        >
          changeTHEME
        </button>
      </div>
    </>
  );
}

export default App;
