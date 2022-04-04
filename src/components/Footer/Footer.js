import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5 py-5">
      <div className="socialIcon">
        <i class="fa-brands fa-facebook-square"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram-square"></i>
      </div>
      <div>
        <h5>Terms Info Privacy</h5>
        <h5>Support Contact Policy</h5>

        <p className="">
          <small>© 2022 All Rights Reserved. Design By bkhadiza40</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
