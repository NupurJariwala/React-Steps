import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContexProvider } from "./context/ThemeContex.jsx";
import { AuthContexProvider } from "./context/AuthContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContexProvider>
    <ThemeContexProvider>
      <App />
    </ThemeContexProvider>
  </AuthContexProvider>
);
