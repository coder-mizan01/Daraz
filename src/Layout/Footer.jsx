import React from "react";
import { Link } from "react-router-dom";
//css
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <section id="footer">

          <div className="content-left">
            <h3>Need help?</h3>
            <Link to="/">customer care</Link>
            <Link to="/">corporate order</Link>
            <Link to="/">refund and return policy</Link>
            <Link to="/">terms and condition</Link>
            <Link to="/">complain management</Link>

          </div>
          <div className="content-center">
            <h3>Shopee</h3>
            <Link to="/">About us</Link>
            <Link to="/">Shopee Blogs</Link>
            <Link to="/">contact with us</Link>
            <Link to="/">Shopee demo</Link>
            <Link to="/">privacy condition</Link>

          </div>

          <div className="content-right">
              <h3>Get in Touch with Us</h3>
            <form action="" className="footer-form">
               <input type="email" />
               <button>send email</button>
            </form>
          </div>



      </section>
    </>
  );
};

export default Footer;
