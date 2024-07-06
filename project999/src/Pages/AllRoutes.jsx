import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Product from "../Components/Product";
import PrivateRoute from "../Components/PrivateRoute";
import Navigation from "../Components/Navigation";
import LoginPage from "../Components/Loginpage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/Product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/navigation" element={<Navigation />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
