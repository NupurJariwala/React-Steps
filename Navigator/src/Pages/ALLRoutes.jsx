import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Product from "../Components/Product";
import Project from "../Components/Project";
import Login from "../Components/Login";
import DescriptionPage from "../Components/DescriptionPage";
import PrivateRoute from "../Components/PrivateRoute";

const ALLRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/description/:id"
          element={
            <PrivateRoute>
              <DescriptionPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default ALLRoutes;
