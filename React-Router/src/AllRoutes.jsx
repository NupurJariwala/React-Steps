import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./AboutPage";
import ProductPage from "./Pages/ProductPage";

import NotFoundPage from "./Pages/NotFoundPage";
import DescriptionPage from "./Pages/DescriptionPage";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./Pages/PrivateRoute";
function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<h1>HomePage</h1>}></Route> */}
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/about" element={<h1>AboutPage</h1>}></Route> */}
        <Route path="/about" element={<AboutPage />}></Route>
        {/* <Route path="/contact" element={<h1>Contact Page</h1>}></Route> */}
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <ProductPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/description/:id" element={<DescriptionPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
