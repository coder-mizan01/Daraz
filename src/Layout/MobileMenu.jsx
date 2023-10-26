import React,{useState} from "react";

import { Link, NavLink } from "react-router-dom";

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
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

//css
import MobileMenuStyle from "../CSS/MobileMenu.module.css"


const MobileMenu = () => {

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  return (
    <div className={MobileMenuStyle.mobile_menu}>
      <ul>
        <li onClick={() => handleDropdownClick(0)}>
          <NavLink >
          <FontAwesomeIcon icon={faLaptop} />  Electronics <FontAwesomeIcon icon={faChevronDown} className={MobileMenuStyle.arrow_icon}  />
          </NavLink>

          <ul  className={`${
              activeDropdown === 0 ? MobileMenuStyle.active : MobileMenuStyle.dropdown
            }`} >
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


        <li  onClick={() => handleDropdownClick(1)}> 
              <NavLink >
                {" "}
                <FontAwesomeIcon  icon={faPerson} /> Girls Fashion{" "}
                <FontAwesomeIcon icon={faChevronDown}  className={MobileMenuStyle.arrow_icon} />
              </NavLink>
              <ul className={`${
              activeDropdown === 1 ? MobileMenuStyle.active : MobileMenuStyle.dropdown
            }`}>
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


            <li onClick={()=>{handleDropdownClick(2)}}>
              <NavLink>
                {" "}
                <FontAwesomeIcon className={MobileMenuStyle.menu_icon}  icon={faShirt} /> Boy's Fashion 
                <FontAwesomeIcon icon={faChevronDown}  className={MobileMenuStyle.arrow_icon} />
              </NavLink>

              <ul className={`${activeDropdown === 2 ?MobileMenuStyle.active : MobileMenuStyle.dropdown }`}>
                <li>
                  <NavLink to="/fashion/cloths">Cloths</NavLink>
                </li>
                <li>
                  <NavLink to="/fashion/shoes">Shoes</NavLink>
                </li>
              </ul>
            </li>


            <li onClick={()=>{handleDropdownClick(3)}}>
              <NavLink>
                {" "} 
                <FontAwesomeIcon className={MobileMenuStyle.menu_icon}  icon={faNotesMedical} /> Health Items{" "}
                <FontAwesomeIcon icon={faChevronDown}  className={MobileMenuStyle.arrow_icon} />
              </NavLink>  

              <ul className={`${activeDropdown === 3 ? MobileMenuStyle.active : MobileMenuStyle.dropdown}`}>
                <li>
                  <NavLink to="/healthcare/skincare">Skin Care</NavLink>
                </li>
                <li>
                  <NavLink to="/">Hair Care</NavLink>
                </li>
              </ul>
            </li>


            <li onClick={() => {
                handleDropdownClick(4);
              }}  >
              <NavLink >
                <FontAwesomeIcon className={MobileMenuStyle.menu_icon}  icon={faCarSide} /> Kids Toy's 
                {" "}   <FontAwesomeIcon icon={faChevronDown}   className={MobileMenuStyle.arrow_icon} />
              
              </NavLink>

            </li>


            <li
              onClick={() => {
                handleDropdownClick(5);
              }}

            >
              <NavLink>
                <FontAwesomeIcon icon={faBasketShopping} /> Groceries{" "}
                <FontAwesomeIcon icon={faChevronDown}   className={MobileMenuStyle.arrow_icon} />
              </NavLink>
              <ul  className={`${activeDropdown === 5 ? MobileMenuStyle.active : MobileMenuStyle.dropdown}`}>
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
              onClick={() => {
                handleDropdownClick(6);
              }}
            >
              <NavLink >
                {" "}
                <FontAwesomeIcon icon={faBaby} /> Baby Care{" "}
                <FontAwesomeIcon icon={faChevronDown}   className={MobileMenuStyle.arrow_icon} />
              </NavLink>
            </li>

            <li
              onClick={() => {
                handleDropdownClick(7);
              }}

            >
              <NavLink>
                {" "}
                <FontAwesomeIcon icon={faCouch} /> Furniture 
                <FontAwesomeIcon icon={faChevronDown}   className={MobileMenuStyle.arrow_icon} /> 
              </NavLink>
              <ul className={`${activeDropdown === 7 ? MobileMenuStyle.active : MobileMenuStyle.dropdown}`}>
                <li>
                  <NavLink to="/furniture/table">table</NavLink>
                </li>
                <li>
                  <NavLink to="/">Furniture</NavLink>
                </li>
              </ul>
            </li>

            <li
              onClick={() => {
                handleDropdownClick(8);
              }}

            >
              <NavLink>
                <FontAwesomeIcon icon={faBaseball} />   
                Sports 
                <FontAwesomeIcon icon={faChevronDown}   className={MobileMenuStyle.arrow_icon} /> 
              </NavLink>
            </li>

            <li
              onClick={() => {
                handleDropdownClick(9);
              }}

            >
              <NavLink>
                {" "}
                <FontAwesomeIcon icon={faGift} /> 
                Vouchers
                <FontAwesomeIcon icon={faChevronDown}   className={MobileMenuStyle.arrow_icon} /> 
              </NavLink>
            </li>

            <li onClick={()=> handleDropdownClick(10)}>
              <NavLink>
                <FontAwesomeIcon icon={faListCheck} /> Others{" "}
                <FontAwesomeIcon icon={faChevronDown}   className={MobileMenuStyle.arrow_icon} /> 
              </NavLink>
            </li>


      </ul>
    </div>
  );
};

export default MobileMenu;
