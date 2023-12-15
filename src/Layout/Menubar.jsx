import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//css
import styles from  "../CSS/Menubar.module.css";

//component
import { categories } from "../Component/Categories";

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
} from "@fortawesome/free-solid-svg-icons";


const Menubar = ({ onScrollMenuBar, onClickMenuBar }) => {
 
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
      <div className={onScrollMenuBar ? styles.scroll : styles.menubar} onClick={onClickMenuBar} >
        <div className={styles.side_nav}>
          <ul>
            {Object.keys(categories).map((category,i)=>{
 
             return  <li key={i}>
              <NavLink to="/">
                <FontAwesomeIcon icon={iconArr[i]}/>{category}{" "}
              </NavLink>
              <ul className={styles.dropdown}>
              {categories[category].map((subcategory) => (
            <li key={subcategory}>
              <NavLink to={`/${category}/${subcategory}`}>
                {subcategory}
              </NavLink>
            </li>
          ))}
              </ul>
            </li>
            })}
           


 {/* <li
              onMouseOver={() => {
                handleMouseOver("fashion");
              }}
              onMouseLeave={() => {
                handleMouseLeave("fashion");
              }}
            >
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon icon={faMobileScreen} />{categories[1]}{" "}
                {fashion && <IoIosArrowForward className={styles.arrow} />}{" "}
              </NavLink>
              <ul className={styles.dropdown}>
                <li>
                  {" "}
                  <NavLink to={`fashion/traditional-wears`}>
                    Traditional wear
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="fashion/western-wears">Western wears</NavLink>
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
                <FontAwesomeIcon icon={faHeadphones} />Headphone Items 
                {mens && <IoIosArrowForward className={styles.arrow}  />}
              </NavLink>
              <ul className={styles.dropdown}>
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
                <FontAwesomeIcon icon={faClock} />Smart Watches{" "}
                {health && <IoIosArrowForward className={styles.arrow} />}
              </NavLink>
              <ul className={styles.dropdown}>
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
              <FontAwesomeIcon icon={faWifi} />Router Collection{" "}
                {kids && <IoIosArrowForward className={styles.arrow}/>}
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
              <FontAwesomeIcon icon={faVolumeHigh} />Speaker & Micro..{" "}
                {groceries && <IoIosArrowForward className={styles.arrow}/>}
              </NavLink>
              <ul className={styles.dropdown}>
                <li>
                  <NavLink to="groceries/chocolate-candies">
                    Chocolate & candy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="groceries/cooking">Cooking Indregiants</NavLink>
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
                <GiBedLamp />Light & Lamps {" "}
                {baby && <IoIosArrowForward className={styles.arrow} />}
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
              <FontAwesomeIcon icon={faHouse} />Home Appliances {electronicDevice && <IoIosArrowForward className={styles.arrow} />}

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
                <GiBeard/>Trimmer & Shaver 
                {home && <IoIosArrowForward className={styles.arrow} />}
              </NavLink>
              <ul className={styles.dropdown}>
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
                <FontAwesomeIcon icon={faBaseball} />Other Items{sports && <IoIosArrowForward className={styles.arrow} />}
              
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
                <FontAwesomeIcon icon={faBook} /> 
                {""} Books{gifts && <IoIosArrowForward className={styles.arrow} />}
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faGift} />Gift & Vouchers{" "}
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>

    </>
  );
};

export default Menubar;
