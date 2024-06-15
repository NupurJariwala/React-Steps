import { Route, Routes } from "react-router-dom";
import PostForm from "./PostForm";
import Homepage from "./Homepage";
import Patch from "./Patch";
import Navigator from "./Navigator";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/post" element={<PostForm />}></Route>
        <Route path="/patch" element={<Patch />}></Route>
        <Route path="/navigator" element={<Navigator />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
