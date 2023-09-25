import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
            <Link to='/'>Shopee</Link>
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
                  <NavLink to="">Electronic Accessories</NavLink>
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
                  <NavLink to="/">Health & Cares items </NavLink>
                </li>


                <li>
                  <NavLink to="/">Girls' Fashion items</NavLink>
                  <ul className="dropdown">
                    <li>
                      {" "}
                      <NavLink to="fashion/traditionalwears"  onClick={handleClick}>
                        Traditional wear
                      </NavLink>
                    </li>

                    <li>
                      {" "}
                      <NavLink to="fashion/westernwears"  onClick={handleClick}>
                        Western wears
                      </NavLink>
                    </li>

                  </ul>
                </li>



                <li>
                  <NavLink to="/">Kids Toy's item</NavLink>
                </li>
                <li>
                  <NavLink  >Groceries products</NavLink>
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
                  <NavLink to="/">Men's Fashion items</NavLink>
                </li>
                <li>
                  <NavLink to="/">Baby Care Items</NavLink>
                </li>
                <li>
                  <NavLink to="/">Electronics Devices</NavLink>
                </li>



                <li>
                  <NavLink to="/">Home & Lifestyle</NavLink>
                </li>
                <li>
                  <NavLink to="/">Sports & Outdoors</NavLink>
                </li>
                <li>
                  <NavLink to="/">Gifts & Vouchers</NavLink>
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