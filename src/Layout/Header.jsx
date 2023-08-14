import React from "react";

//component
import TopHeader from "./TopHeader";

//icons
import { BsCartCheck } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

//css
import "../CSS/Header.css";

// LOGO Images
import DarazLogo from "../Images/DarazaLogo.png";

//CartHook
import { GlobalCartHook } from "../Context/CartContext";

const Header = () => {

  const {Cart} = GlobalCartHook();
  return (
    <>
      <header id="header">
        <TopHeader />

        <div className="bottom-header">
          <div className="responsive-menu">
            <GiHamburgerMenu
              style={{ color: "#F85606", fontSize: "1.8rem" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            />
            <div
              className="offcanvas offcanvas-start"
              style={{ width: "350px" }}
              data-bs-scroll="true"
              tabIndex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-header">
                <img
                  src={DarazLogo}
                  alt="darazlogo"
                  style={{ width: "150px", height: "auto" }}
                  className="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="offcanvas-side-nav">
                  <ul>
                    <li>
                      <NavLink to="/">Women's & Girls' Fashion</NavLink>
                      <ul className="dropdown">
                        <li>
                          {" "}
                          <NavLink to="fashion/traditionalwears">
                            Traditional wear
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="">Muslim wear</NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="fashion/westernwears">
                            Western wears
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/">Shoes</NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/">Watches & Bags</NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/">Health & Beauty</NavLink>
                    </li>

                    <li>
                      <NavLink to="/">Watches, Bags, Jewellery</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Men's & Boys' Fashion</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Mother & Baby</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Electronics Devices</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">TV & Home Appliances</NavLink>
                    </li>

                    <li>
                      <NavLink to="/">Electronic Accessories</NavLink>
                      <ul className="dropdown">
                        <li>
                          <NavLink to="ElectronicAccessories/SmartPhones">
                            Smart Phones
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="ElectronicAccessories/ComputerAccessories">
                            ComputerAccessories
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/">Groceries</NavLink>
                      <ul className="dropdown">
                        <li>
                          <NavLink to="Groceries/ChocolateCandies">
                            Chocolate & candy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="Groceries/Cooking">
                            Cooking Indregiants
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/">Home & Lifestyle</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Sports & Outdoors</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Automotive & Motorbike</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="logo">
            <a href="/">
              {" "}
              <img src={DarazLogo} alt="" />{" "}
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
