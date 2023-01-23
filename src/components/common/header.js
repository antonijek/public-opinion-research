import React from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";

let token = localStorage.getItem("token");

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://pos.org/wp-content/uploads/2019/12/icon2.png"
          alt=""
        />
      </Link>
      <nav className="navbar">
        <Link className="ankets-tab" to="/">
          <h4> HOME </h4>
        </Link>
        <Link className="ankets-tab" to="/ankets">
          <h4> ANKETE </h4>
        </Link>

        <Link to="/login" sx={{ color: "rgb(86, 88, 86)" }}>
          <img
            className="admin-logo"
            src="https://icones.pro/wp-content/uploads/2022/07/icones-d-administration-gris.png"
            alt="admin"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
