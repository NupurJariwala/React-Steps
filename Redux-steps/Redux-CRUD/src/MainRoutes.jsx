import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./Components/Admin";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
