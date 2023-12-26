import React from "react";
import header from "./header.module.css";
import music from "../../assets/music.png";
import shoppingcart from "../../assets/shoppingcart.png";
const Header = () => {
  return (
    <div className={header.header}>
      <div className={header.logocontainer}>
        <img src={music} alt="" />
        <div className={header.name}>
          <p>Musicart</p>
          <p>Home</p>
        </div>
      </div>
      <div className={header.cart}>
        <button>
          <img src={shoppingcart} alt="" />
          <p>View Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
