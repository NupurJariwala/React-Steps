import Header from "../Components/Header";
import Navbar1 from "../Components/Navbar1";
import { Buttons } from "../Components/Buttons";
import ProductPage from "./ProductPage";
const MainPage = () => {
  return (
    <div>
      <Header />
      <Navbar1 />
      <Buttons />
      <div>
        <ProductPage />
      </div>
    </div>
  );
};

export default MainPage;
