import React from "react";
import { NavLink } from "react-router-dom";

//Layout
import TopHeader from "./TopHeader";
import OffCanvas from "./OffCanvas"
//icons
import { BsCartCheck } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";


//css
import "../CSS/Header.css";



//CartHook
import { GlobalCartHook } from "../Context/CartContext";

const Header = () => {

  const {Cart} = GlobalCartHook();
  return (
    <>
      <header id="header">
        <TopHeader />

        <div className="bottom-header">
  
           <OffCanvas />
           
          <div className="logo">
            <a href="/">
              {" "}
              <img src="DarazaLogo.png" alt="" />{" "}
            </a>
          </div>

          <div className="searchBar">
            <input type="text" placeholder="Search in daraz" />
            <button type="search">
              <GrSearch className="searchIcon" style={{ color: "white" }} />
            </button>
          </div>

          <div className="cart-poster-div">

            <div className="cart">
              <NavLink to="/cart">
                <BsCartCheck className="cartIcon" />
                 <span>{Cart.length}</span>
              </NavLink>
            </div>

            <div className="poster">
              <img src="HomePagePoster.png" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
