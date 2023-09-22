import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

//Layout
import OffCanvas from "./OffCanvas"
//icons
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle ,FaUserPlus} from "react-icons/fa"


//css
import "../CSS/Header.css";



//CartHook
import { GlobalCartHook } from "../Context/CartContext";
import { GlobalAuthHook } from "../Context/authContext";

const Header = () => {

  const { Cart } = GlobalCartHook();
  const [state] = GlobalAuthHook();
  console.log(state);

  return (
    <>
      <header id="header">

          <OffCanvas />

          <div className="logo">
            <a href="/">
              {" "}
              SHOPEE
            </a>
          </div>

          <div className="searchBar">
            <input type="text" placeholder="Search in shopee" />
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
              {state.user && state.token !== null ? <Link to='/dashboard'> <FaUserCircle className="user-icon"  /> </Link>
                :<div className="homepage-register-login"><FaUserPlus className="icon" />
                
                 <div>
                  <p>Account</p>
                  <Link to='/register'>register</Link> or <Link to='/login'>login</Link>
                 </div>
                </div>}
            </div>
            
  
          </div>
      </header>

    </>
  );
};

export default Header;
