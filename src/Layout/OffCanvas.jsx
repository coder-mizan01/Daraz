import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//css
import "../CSS/OffCanvas.css"

//icons
import { GiHamburgerMenu } from "react-icons/gi";


const OffCanvas = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
     setClick(!click)
  }
  return (
    <>
      <div className="responsive-menu">
        <GiHamburgerMenu
          className= "GiHamburgerMenu"
          type="button"
          onClick={() => setClick(!click)}

        />
        <div
          className={click ? 'offcan' : "show-offcan"}
        >
          <div className="offcan-header">
            <img
              src="DarazaLogo.png"
              alt="darazlogo"
              style={{ width: "150px", height: "auto" }}
            />
            <button
              type="button"
              className="btn-close"
              onClick={handleClick}
            ></button>
          </div>
          <div className="offcan-body">
            <div className="offcan-side-nav">
              <ul>
                <li>
                  <NavLink to="/">Women's & Girls' Fashion</NavLink>
                  <ul className="dropdown">
                    <li>
                      {" "}
                      <NavLink to="fashion/traditionalwears"  onClick={handleClick}>
                        Traditional wear
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to=""  onClick={handleClick}>Muslim wear</NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="fashion/westernwears"  onClick={handleClick}>
                        Western wears
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/"  onClick={handleClick}>Shoes</NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/"  onClick={handleClick}>Watches & Bags</NavLink>
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
                      <NavLink to="ElectronicAccessories/SmartPhones"  onClick={handleClick}>
                        Smart Phones
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="ElectronicAccessories/ComputerAccessories"  onClick={handleClick}>
                        ComputerAccessories
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink  >Groceries</NavLink>
                  <ul className="dropdown">
                    <li>
                      <NavLink to="Groceries/ChocolateCandies"  onClick={handleClick}>
                        Chocolate & candy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="Groceries/Cooking"  onClick={handleClick}>
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
    </>
  )
}

export default OffCanvas