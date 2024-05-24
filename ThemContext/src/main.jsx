import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeContexProvider } from "./contexts/ThemeContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContexProvider>
    <App />
  </ThemeContexProvider>
);
