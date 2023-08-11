import React from "react";
import { NavLink } from "react-router-dom";


//css

import "../CSS/Cover.css"

const Cover = () => {
  return (
    <>
  <section id="cover">

    <div className="menubar">
      <div className="side-nav">
        
        <ul>

          <li><NavLink to="/">Women's & Girls' Fashion</NavLink>
           <ul className="dropdown">
            <li> <NavLink to="fashion/traditionalwears">Traditional wear</NavLink></li>
            <li> <NavLink to="">Muslim wear</NavLink></li>
            <li> <NavLink to="fashion/westernwears">Western wears</NavLink></li>
            <li> <NavLink to="/">Shoes</NavLink></li>
            <li> <NavLink to="/">Watches & Bags</NavLink></li> 
           </ul>
           </li>

           <li><NavLink to="/">Health & Beauty</NavLink></li>
           
           <li><NavLink to="/">Watches, Bags, Jewellery</NavLink></li>
             <li><NavLink to="/">Men's & Boys' Fashion</NavLink></li>
             <li><NavLink to="/">Mother & Baby</NavLink></li>
             <li><NavLink to="/">Electronics Devices</NavLink></li>
             <li><NavLink to="/">TV & Home Appliances</NavLink></li>

            <li><NavLink to="/">Electronic Accessories</NavLink>
             <ul className="dropdown">
              <li><NavLink to="ElectronicAccessories/SmartPhones">Smart Phones</NavLink></li>
              <li><NavLink to="ElectronicAccessories/ComputerAccessories">ComputerAccessories</NavLink></li>
             </ul>
             </li>

             <li><NavLink to="/">Groceries</NavLink>
             <ul className="dropdown">
              <li><NavLink to="Groceries/ChocolateCandies">Chocolate & candy</NavLink></li>
              <li><NavLink to="Groceries/Cooking">Cooking Indregiants</NavLink></li>
             </ul>
             </li>



             <li><NavLink to="/">Home & Lifestyle</NavLink></li>
             <li><NavLink to="/">Sports & Outdoors</NavLink></li>
             <li><NavLink to="/">Automotive & Motorbike</NavLink></li>

        </ul>

      </div>
    </div>

    <div  id="carouselExampleIndicators" className="carousel slide carousel-fade" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="slide1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide3.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>

</div>

    </section>

    </>
  );
};

export default Cover;