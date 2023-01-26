import React from "react";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright">
        Copyright © 2023 Antonije Knezevic & Milutin Radonjic
      </p>
      <img
        src="../../social-networks.png"
        className="social-networks"
        alt="social"
      />
    </div>
  );
};

export default Footer;
