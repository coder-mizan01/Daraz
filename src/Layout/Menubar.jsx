import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//css
import "../CSS/Menubar.css"

//icons
import { IoIosArrowForward } from "react-icons/io"


const Menubar = () => {

  const [isHovered, setIsHovered] = useState({ fashion: false, health: false, electronics: false, watches: false, groceries: false, mens: false, mother: false, electronicDevice: false, tv: false, home: false, sports: false, automative: false });
  const { fashion, health, electronics, watches, groceries, mens, mother, electronicDevice, tv, home, sports, automative } = isHovered;
  const handleMouseOver = (item) => {
    setIsHovered((prev) => ({
      ...prev,
      [item]: true
    }))
  }

  const handleMouseLeave = (item) => {
    setIsHovered((prev) => ({
      ...prev,
      [item]: false
    }))
  }

  return (
    <>
      <div className="menubar">
        <div className="side-nav">

          <ul>

            <li onMouseOver={() => { handleMouseOver('fashion') }} onMouseLeave={() => { handleMouseLeave('fashion') }} ><NavLink to="/">Women's & Girls' Fashion {fashion && <IoIosArrowForward />} </NavLink>
              <ul className="dropdown">
                <li> <NavLink to="fashion/traditionalwears">Traditional wear</NavLink></li>
                <li> <NavLink to="fashion/westernwears">Western wears</NavLink></li>
              </ul>
            </li>


            <li onMouseOver={() => { handleMouseOver('health') }} onMouseLeave={() => { handleMouseLeave('health') }} ><NavLink to="/">Health & Beauty {health && <IoIosArrowForward />}</NavLink></li>


            <li onMouseOver={() => { handleMouseOver('electronics') }} onMouseLeave={() => { handleMouseLeave('electronics') }} ><NavLink to="/" >Electronic Accessories {electronics && <IoIosArrowForward />}</NavLink>
              <ul className="dropdown">
                <li><NavLink to="ElectronicAccessories/SmartPhones">Smart Phones</NavLink></li>
                <li><NavLink to="ElectronicAccessories/ComputerAccessories">ComputerAccessories</NavLink></li>
              </ul>
            </li>

            <li onMouseOver={() => { handleMouseOver('watches') }} onMouseLeave={() => { handleMouseLeave('watches') }}  ><NavLink to="/">Watches, Bags, Jewellery {watches && <IoIosArrowForward />}</NavLink></li>

            <li onMouseOver={() => { handleMouseOver('groceries') }} onMouseLeave={() => { handleMouseLeave('groceries') }} ><NavLink to="/">Groceries Items{groceries && <IoIosArrowForward />}</NavLink>
              <ul className="dropdown">
                <li><NavLink to="Groceries/ChocolateCandies">Chocolate & candy</NavLink></li>
                <li><NavLink to="Groceries/Cooking">Cooking Indregiants</NavLink></li>
              </ul>
            </li>



            <li onMouseOver={() => { handleMouseOver('mens') }} onMouseLeave={() => { handleMouseLeave('mens') }}><NavLink to="/">Men's & Boys' Fashion{mens && <IoIosArrowForward />}</NavLink></li>
            <li onMouseOver={() => { handleMouseOver('mother') }} onMouseLeave={() => { handleMouseLeave('mother') }}  ><NavLink to="/">Mother & Baby{mother && <IoIosArrowForward />}</NavLink></li>
            <li onMouseOver={() => { handleMouseOver('electronicDevice') }} onMouseLeave={() => { handleMouseLeave('electronicDevice') }}  ><NavLink to="/">Electronics Devices{electronicDevice && <IoIosArrowForward />}</NavLink></li>
            <li onMouseOver={() => { handleMouseOver('tv') }} onMouseLeave={() => { handleMouseLeave('tv') }}  ><NavLink to="/">TV & Home Appliances{tv && <IoIosArrowForward />}</NavLink></li>

            <li onMouseOver={() => { handleMouseOver('home') }} onMouseLeave={() => { handleMouseLeave('home') }} ><NavLink to="/">Home & Lifestyle{home && <IoIosArrowForward />}</NavLink></li>
            <li onMouseOver={() => { handleMouseOver('sports') }} onMouseLeave={() => { handleMouseLeave('sports') }} ><NavLink to="/">Sports & Outdoors{sports && <IoIosArrowForward />}</NavLink></li>
            <li onMouseOver={() => { handleMouseOver('automative') }} onMouseLeave={() => { handleMouseLeave('automative') }} ><NavLink to="/">Automotive & Motorbike{automative && <IoIosArrowForward />}</NavLink></li>

          </ul>

        </div>
      </div>
    </>
  )
}

export default Menubar;