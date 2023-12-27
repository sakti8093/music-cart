import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Product from "../pages/product/Product";
import Details from "../pages/details/Details";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/details" element={<Details />}></Route>
    </Routes>
  );
};

export default Allroutes;
