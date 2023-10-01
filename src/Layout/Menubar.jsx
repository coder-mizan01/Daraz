import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//css
import "../CSS/Menubar.css"

//icons
import { IoIosArrowForward } from "react-icons/io"


const Menubar = () => {

  const [isHovered, setIsHovered] = useState({ fashion: false, health: false, electronics: false, kids: false, groceries: false, mens: false, baby: false, electronicDevice: false, tv: false, home: false, sports: false, gifts: false });
  const { fashion, health, electronics, kids, groceries, mens, baby, electronicDevice, home, sports, gifts } = isHovered;
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

          <li onMouseOver={() => { handleMouseOver('electronics') }} onMouseLeave={() => { handleMouseLeave('electronics') }} ><NavLink to="/" >Electronic Accessories {electronics && <IoIosArrowForward />}</NavLink>
              <ul className="dropdown">
                <li><NavLink to="ElectronicAccessories/SmartPhones">Smart Phones</NavLink></li>
                <li><NavLink to="ElectronicAccessories/ComputerAccessories">ComputerAccessories</NavLink></li>
              </ul> 
            </li>




            <li onMouseOver={() => { handleMouseOver('health') }} onMouseLeave={() => { handleMouseLeave('health') }} ><NavLink to="/">Health Cares items {health && <IoIosArrowForward />}</NavLink>
            <ul className='dropdown'>
              <li><NavLink to='/healthcare/skincare'>Skin Care</NavLink></li>
              <li><NavLink to='/'>Hair Care</NavLink></li>
            </ul>
            
            </li>


            <li onMouseOver={() => { handleMouseOver('fashion') }} onMouseLeave={() => { handleMouseLeave('fashion') }} ><NavLink to="/"> Girls' Fashion items {fashion && <IoIosArrowForward />} </NavLink>
              <ul className="dropdown">
                <li> <NavLink to="fashion/traditionalwears">Traditional wear</NavLink></li>
                <li> <NavLink to="fashion/westernwears">Western wears</NavLink></li>
              </ul>
            </li>

            <li onMouseOver={() => { handleMouseOver('kids') }} onMouseLeave={() => { handleMouseLeave('kids') }}  ><NavLink to="/">Kids Toy's item {kids && <IoIosArrowForward />}</NavLink></li>

            <li onMouseOver={() => { handleMouseOver('groceries') }} onMouseLeave={() => { handleMouseLeave('groceries') }} ><NavLink to="/">Groceries products{groceries && <IoIosArrowForward />}</NavLink>
              <ul className="dropdown">
                <li><NavLink to="Groceries/ChocolateCandies">Chocolate & candy</NavLink></li>
                <li><NavLink to="Groceries/Cooking">Cooking Indregiants</NavLink></li>
              </ul>
            </li>



            <li onMouseOver={() => { handleMouseOver('mens') }} onMouseLeave={() => { handleMouseLeave('mens') }}><NavLink to="/">Men's Fashion items{mens && <IoIosArrowForward />}</NavLink>

             <ul className='dropdown'>
             <li><NavLink to="/fashion/cloths">Cloths</NavLink></li>
                <li><NavLink to="/fashion/shoes">Shoes</NavLink></li  >
              </ul> 
            
            </li>
            <li onMouseOver={() => { handleMouseOver('baby') }} onMouseLeave={() => { handleMouseLeave('baby') }}  ><NavLink to="/">Baby Care Items{baby && <IoIosArrowForward />}</NavLink></li>
            <li onMouseOver={() => { handleMouseOver('electronicDevice') }} onMouseLeave={() => { handleMouseLeave('electronicDevice') }}  ><NavLink to="/">Electronics Devices{electronicDevice && <IoIosArrowForward />}</NavLink></li>
           

            <li onMouseOver={() => { handleMouseOver('home') }} onMouseLeave={() => { handleMouseLeave('home') }} ><NavLink to="/">Furniture items{home && <IoIosArrowForward />}</NavLink>
              <ul className='dropdown'>
                <li><NavLink to='/furniture/table'>table</NavLink></li>
                <li><NavLink to='/'>Furniture</NavLink></li>
              </ul>
            </li>
            <li onMouseOver={() => { handleMouseOver('sports') }} onMouseLeave={() => { handleMouseLeave('sports') }} ><NavLink to="/">Sports & Outdoors{sports && <IoIosArrowForward />}</NavLink></li>
            <li onMouseOver={() => { handleMouseOver('gifts') }} onMouseLeave={() => { handleMouseLeave('gifts') }} ><NavLink to="/">Gifts & Vouchers{gifts && <IoIosArrowForward />}</NavLink></li>

          </ul>

        </div>
      </div>
    </>
  )
}

export default Menubar;