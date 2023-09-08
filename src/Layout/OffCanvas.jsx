import React,{useState} from "react";
import { NavLink } from "react-router-dom";

//css
import "../CSS/OffCanvas.css"

//icons
import { GiHamburgerMenu } from "react-icons/gi";


const OffCanvas = () => {

  const [click ,setClick] = useState(false);
    return (
        <>
                  <div className="responsive-menu">
            <GiHamburgerMenu
              className={click ? "GiHamburgerMenu" : "demo"}
              type="button"
              onClick={()=>setClick(!click)}
          
            />
            <div
              className={click ? 'none' : 'offcan' }
           
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
                  onClick={()=>setClick(!click)}
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
        </>
    )
}

export default OffCanvas