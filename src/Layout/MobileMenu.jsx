import React,{useState} from "react";

import { Link, NavLink } from "react-router-dom";

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMobileScreen,
  faHeadphones,
  faWifi,
  faClock,
  faLaptop,
  faVolumeHigh,
  faBook,
  faHouse,
  faPlugCircleBolt,
  faCircle,
  faGift,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons"; 

//css
import MobileMenuStyle from "../CSS/MobileMenu.module.css";

//component
import {categories} from "../Component/Categories"


const MobileMenu = () => {

  const iconArr = [
    faLaptop,
    faMobileScreen,
    faHeadphones,
    faClock,
    faWifi,
    faLightbulb,
    faHouse,
    faPlugCircleBolt,
    faVolumeHigh,
    faBook,
    faCircle,
    faGift,]

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  return (
    <div className={MobileMenuStyle.mobile_menu}>
      <ul>{
        Object.keys(categories).map((category,i)=>{
          return <React.Fragment key={i}>
           <li onClick={() => handleDropdownClick(i)}>
          <NavLink >
          <FontAwesomeIcon icon={iconArr[i]} />{category}<FontAwesomeIcon icon={faChevronDown} className={MobileMenuStyle.arrow_icon}  />
          </NavLink>

          <ul  className={`${
              activeDropdown === 0 ? MobileMenuStyle.active : MobileMenuStyle.dropdown
            }`} >
            {/*category[i].map((c)=>{
              return <li>
              <NavLink to="/electronics/smartphones">
                Smart Phones
              </NavLink>
            </li>
            })*/}
          </ul>
        </li>
              
          </React.Fragment>
        })
        }
       

  {/*
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
                  <NavLink to="/fashion/traditional-wears">
                    Traditional wear
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/fashion/western-wears">Western wears</NavLink>
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
                  <NavLink to="/healthcare/skincare">Hair Care</NavLink>
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
                  <NavLink to="/groceries/chocolate-candies">
                    Chocolate & candy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/groceries/cooking">Cooking Indregiants</NavLink>
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
 */}

      </ul>
    </div>
  );
};

export default MobileMenu;
