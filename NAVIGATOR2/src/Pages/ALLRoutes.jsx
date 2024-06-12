import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Product from "../Components/Product";
import Project from "../Components/Project";
import Login from "../Components/Login";

import PrivateRoute from "../Components/PrivateRoute";

const ALLRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/Login" element={<Login />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
      </Routes>
    </div>
  );
};

export default ALLRoutes;
