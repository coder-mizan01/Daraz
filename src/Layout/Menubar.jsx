import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//css
import styles from "../CSS/Menubar.module.css";

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
    faGift,
  ];

  const [isHovered, setIsHovered] = useState({
    computer: false,
    mobile: false,
    headohone: false,
    smart_watch: false,
    routers: false,
    light_lamp: false,
    home_appliances: false,
    trimmer_shaver: false,
    microphone: false,
    books: false,
    other: false,
    gifts: false,
  });

    const {
      computer,
      mobile,
      headohone,
      smart_watch,
      routers,
      light_lamp,
      home_appliances,
      trimmer_shaver,
      microphone,
    books,
    others,
    gifts
  } = isHovered;


//const [isHovered , setIsHovered] = useState(false);

  const handleMouseOver = (i) => {
    setIsHovered((prev) => ({
      ...prev,
      [i]: true,
    }));  

  };

  const handleMouseLeave = (i) => {
    setIsHovered((prev) => ({
      ...prev,
      [i]: false,
    }));

  };

  return (
    <>
      <div
        className={onScrollMenuBar ? styles.scroll : styles.menubar}
        onClick={onClickMenuBar}
      >
        <div className={styles.side_nav}>
          <ul>
            {Object.keys(categories).map((category, i) => {
              // replace the underline with space
              let categoryWithUnderLine = category.replace(/_/g, " ");

              return (    
                <li key={i} onMouseOver={()=>{handleMouseOver(i)}}  onMouseLeave={()=>{handleMouseLeave(i)}} >
                  <NavLink to={`/${category}`}>
                    <FontAwesomeIcon icon={iconArr[i]} className={styles.menu_icon} />
                    {categoryWithUnderLine}{" "}
                    {isHovered[i] && <IoIosArrowForward className={styles.arrow} /> } 
                  </NavLink>
                  <ul className={styles.dropdown}>
                    {categories[category].map((subcategory) => {
                      // replace the underline with space
                      let subcategoryWithUnderLine = subcategory.replace(
                        /_/g,
                        " "
                      );

                      return (
                        <li key={subcategory}>
                          <NavLink to={`/${category}/${subcategory}`}>
                            {subcategoryWithUnderLine}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menubar;
