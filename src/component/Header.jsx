/* eslint-disable no-unused-vars */
import React from "react";
import "../Styles/Header.scss";

const Header = () => {
  return (
    <section id="header">
      <nav className="header-nav">
        <a href="" className="nav-item">
          男裝
        </a>
        <a href="" className="nav-item">
          女裝
        </a>
        <a href="" className="nav-item">
          最新消息
        </a>
        <a href="" className="nav-item">
          客製產品
        </a>
        <a href="" className="nav-item">
          聯絡我們
        </a>
      </nav>
      <a>
        <img
          src="./src/assets/pictures/logo.svg"
          className="header-logo cursor-point"
        ></img>
      </a>
      <object
        data="./src/assets/pictures/cart.svg"
        className="nav-icon cursor-point"
        type="image/svg+xml"
      ></object>

      <object
        data="./src/assets/pictures/moon.svg"
        className="nav-icon cursor-point"
        type="image/svg+xml"
      ></object>

      <object
        data="./src/assets/pictures/search.svg"
        className="nav-icon cursor-point search"
        type="image/svg+xml"
      ></object>
    </section>
  );
};

export default Header;
