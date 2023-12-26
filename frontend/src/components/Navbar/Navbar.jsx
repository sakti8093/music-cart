import React from "react";
import phonecall from "../../assets/phonecall.png";
import navbar from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbar.nav}>
      <div className={navbar.phone}>
        <img src={phonecall} alt="" />
        <p>912121131313</p>
      </div>
      <div className={navbar.shop}>
        <p>Get 50% off on selected items </p>
        <div className={navbar.divider}></div>
        <p>Shop Now</p>
      </div>
      <p className={navbar.logout}>Logout</p>
    </div>
  );
};

export default Navbar;
