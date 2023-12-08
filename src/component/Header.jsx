/* eslint-disable no-unused-vars */
import React from "react";
// import { ReactComponent as Logo } from "../assets/pictures/logo.svg";
import logo from "../assets/pictures/logo.svg";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <nav className="header-nav">
        <a href="">男裝</a>
        <a href="">女裝</a>
        <a href="">最新消息</a>
        <a href="">客製產品</a>
        <a href="">聯絡我們</a>
        <div className="logo"></div>
        <a className="menu">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a className="menu">
          <i className="fa-regular fa-heart" href="#"></i>
        </a>
        <a className="menu">
          <i className="fa-regular fa-moon"></i>
        </a>
      </nav>
    </div>
  );
};

export default Header;
