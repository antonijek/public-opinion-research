import { React, useEffect, useState } from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import AccountMenu from "../admin/accountMenu";
import { WindowSharp } from "@mui/icons-material";

const Header = ({ token1, setToken1 }) => {
  console.log(token1);
  //console.log(setToken1());
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

        {token1 && <AccountMenu setToken1={setToken1} />}
      </nav>
    </div>
  );
};

export default Header;
