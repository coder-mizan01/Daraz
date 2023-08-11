import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//global hook
import { GlobalAuthHook } from '../Context/authContext'

//css
import "../CSS/Header.css"


const TopHeader = () => {
  const [state,setState] = GlobalAuthHook();
 
  const name = state.user ? state.user.name : null;

  const handleLogOut = () =>{
    setState({
      user : null,
      token : "",
    })
    localStorage.removeItem("auth")
  }
  return (
    <>
  <div id='topheader'>
    <Link to="/" >SAVE MORE ON APP</Link> 
    <Link className='responsive-none' to="/" >DARAZ DONATES</Link> 
    <Link to="/" >SELL ON DARAZ </Link> 
    <Link to="/" >CUSTOMER CARE</Link> 
    <Link to="/" > TRACK MY ORDER</Link> 
    {!state.user &&  <Link to="/Register" >signup / login</Link>}
    <Link to="/"  className='responsive-none'> AFFILIATE PROGRAM</Link> 
    <Link to="/" >ভাষা</Link> 
    {!state.user ? <></>  :  <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {name} Account
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to='/dashboard'>Dashboard</Link></li>
    <li><Link className='dropdown-item' onClick={handleLogOut} to="/" >LogOut</Link></li>
  </ul>
</li>} 
  


  </div>
    </>
  )
}

export default TopHeader