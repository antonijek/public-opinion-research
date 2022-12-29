import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h2>Header</h2>
      <Link to="/login">
        <h2 className="admin">Admin</h2>
      </Link>
    </div>
  );
};

export default Header;
