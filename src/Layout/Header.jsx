import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

//Layout
import TopHeader from "./TopHeader";
import OffCanvas from "./OffCanvas"
//icons
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa"


//css
import "../CSS/Header.css";



//CartHook
import { GlobalCartHook } from "../Context/CartContext";
import { GlobalAuthHook } from "../Context/authContext";

const Header = () => {

  const { Cart } = GlobalCartHook();
  const [state] = GlobalAuthHook();
  console.log(state);

  const [mouse , setMouse]= useState(false)
  return (
    <>
      <header id="header">
        <TopHeader />

        <div className="bottom-header">

          <OffCanvas />

          <div className="logo">
            <a href="/">
              {" "}
              SHOPEE
            </a>
          </div>

          <div className="searchBar">
            <input type="text" placeholder="Search in daraz" />
            <button type="search">
              <AiOutlineSearch className="searchIcon" style={{ color: "white" }} />
            </button>
          </div>

          <div className="cart-user-div">

            <div className="cart">
              <NavLink to="/cart">
                <BsCartCheck className="cartIcon" />
                {Cart.length !== 0 && <span> {Cart.length}</span>}
              </NavLink>
            </div>

            <div className="user">
              {state.user && state.token !== null ? <FaUserCircle className="user-icon" />
                : <Link to='/register'><button className="user-btn">Sign up</button></Link>}
            </div>
            
  


          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
