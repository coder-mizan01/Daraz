import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//css
import "../CSS/Menubar.css";

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faNotesMedical,
  faShirt,
  faBasketShopping,
  faCarSide,
  faCouch,
  faBaseball,
  faTv,
  faBaby,
  faPerson,
  faGift,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const Menubar = () => {
  const [isHovered, setIsHovered] = useState({
    fashion: false,
    health: false,
    electronics: false,
    kids: false,
    groceries: false,
    mens: false,
    baby: false,
    electronicDevice: false,
    tv: false,
    home: false,
    sports: false,
    gifts: false,
  });
  const {
    fashion,
    health,
    electronics,
    kids,
    groceries,
    mens,
    baby,
    electronicDevice,
    home,
    sports,
    gifts,
  } = isHovered;
  const handleMouseOver = (item) => {
    setIsHovered((prev) => ({
      ...prev,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item) => {
    setIsHovered((prev) => ({
      ...prev,
      [item]: false,
    }));
  };

  return (
    <>
      <div className="menubar">
        <div className="side-nav">
          <ul>
            <li
              onMouseOver={() => {
                handleMouseOver("electronics");
              }}
              onMouseLeave={() => {
                handleMouseLeave("electronics");
              }}
            >
              <NavLink to="/">
                <FontAwesomeIcon icon={faLaptop} /> Electronics{" "}
                {electronics && <IoIosArrowForward className='arrow'  />}
              </NavLink>
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

            <li
              onMouseOver={() => {
                handleMouseOver("fashion");
              }}
              onMouseLeave={() => {
                handleMouseLeave("fashion");
              }}
            >
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon icon={faPerson} /> Girls Fashion{" "}
                {fashion && <IoIosArrowForward className='arrow' />}{" "}
              </NavLink>
              <ul className="dropdown">
                <li>
                  {" "}
                  <NavLink to="fashion/traditionalwears">
                    Traditional wear
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="fashion/westernwears">Western wears</NavLink>
                </li>
              </ul>
            </li>

            <li
              onMouseOver={() => {
                handleMouseOver("mens");
              }}
              onMouseLeave={() => {
                handleMouseLeave("mens");
              }}
            >
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon icon={faShirt} /> Boy's Fashion 
                {mens && <IoIosArrowForward className='arrow' />}
              </NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to="/fashion/cloths">Cloths</NavLink>
                </li>
                <li>
                  <NavLink to="/fashion/shoes">Shoes</NavLink>
                </li>
              </ul>
            </li>

            <li
              onMouseOver={() => {
                handleMouseOver("health");
              }}
              onMouseLeave={() => {
                handleMouseLeave("health");
              }}
            >
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon icon={faNotesMedical} /> Health Items{" "}
                {health && <IoIosArrowForward className='arrow' />}
              </NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to="/healthcare/skincare">Skin Care</NavLink>
                </li>
                <li>
                  <NavLink to="/">Hair Care</NavLink>
                </li>
              </ul>
            </li>

            <li
              onMouseOver={() => {
                handleMouseOver("kids");
              }}
              onMouseLeave={() => {
                handleMouseLeave("kids");
              }}
            >
              <NavLink to="/">
                <FontAwesomeIcon icon={faCarSide} /> Kids Toy's{" "}
                {kids && <IoIosArrowForward className='arrow' />}
              </NavLink>
            </li>

            <li
              onMouseOver={() => {
                handleMouseOver("groceries");
              }}
              onMouseLeave={() => {
                handleMouseLeave("groceries");
              }}
            >
              <NavLink to="/">
                <FontAwesomeIcon icon={faBasketShopping} /> Groceries{" "}
                {groceries && <IoIosArrowForward className='arrow' />}
              </NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to="Groceries/ChocolateCandies">
                    Chocolate & candy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="Groceries/Cooking">Cooking Indregiants</NavLink>
                </li>
              </ul>
            </li>

            <li
              onMouseOver={() => {
                handleMouseOver("baby");
              }}
              onMouseLeave={() => {
                handleMouseLeave("baby");
              }}
            >
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon icon={faBaby} /> Baby Care{" "}
                {baby && <IoIosArrowForward className='arrow' />}
              </NavLink>
            </li>
            <li
              onMouseOver={() => {
                handleMouseOver("electronicDevice");
              }}
              onMouseLeave={() => {
                handleMouseLeave("electronicDevice");
              }}
            >
              <NavLink to="/">
                <FontAwesomeIcon icon={faTv} /> Big Deal {electronicDevice && <IoIosArrowForward className='arrow' />}

              </NavLink>
            </li>

            <li
              onMouseOver={() => {
                handleMouseOver("home");
              }}
              onMouseLeave={() => {
                handleMouseLeave("home");
              }}
            >
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon icon={faCouch} /> Furniture 
                {home && <IoIosArrowForward className='arrow' />}
              </NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to="/furniture/table">table</NavLink>
                </li>
                <li>
                  <NavLink to="/furniture/sofa">Sofa</NavLink>
                </li>
              </ul>
            </li>
            
            <li
              onMouseOver={() => {
                handleMouseOver("sports");
              }}
              onMouseLeave={() => {
                handleMouseLeave("sports");
              }}
            >
              <NavLink to="/">
                <FontAwesomeIcon icon={faBaseball} />   Sports {sports && <IoIosArrowForward className='arrow' />}
              
              </NavLink>
            </li>
            <li
              onMouseOver={() => {
                handleMouseOver("gifts");
              }}
              onMouseLeave={() => {
                handleMouseLeave("gifts");
              }}
            >
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon icon={faGift} /> 
                {""} Vouchers{gifts && <IoIosArrowForward className='arrow' />}
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faListCheck} /> Others{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menubar;
