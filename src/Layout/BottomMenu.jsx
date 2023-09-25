import React from 'react'

//packages
import { Link } from 'react-router-dom';

//icons
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineShoppingCart} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi"
//css
import "../CSS/BottomMenu.css"


const BottomMenu = () => {
  return (
    <>
    <section id='bottom-menu'>

           <Link to='/'><AiOutlineHome className='icon' /></Link>
            <Link to='/'><AiOutlineQuestionCircle className='icon' /></Link>
            <Link to='/cart'><AiOutlineShoppingCart className='icon' /></Link>
            <Link to='/dashboard'><BiUserCircle className='icon'  /></Link>

    </section>
    </>
  )
}

export default BottomMenu