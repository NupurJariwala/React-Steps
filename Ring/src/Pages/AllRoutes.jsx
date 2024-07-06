import { Route, Routes } from "react-router-dom";

import PopularSearchesPages from "./PopularSearchesPages";
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route
          path="/popularsearchesPages"
          element={<PopularSearchesPages />}
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
