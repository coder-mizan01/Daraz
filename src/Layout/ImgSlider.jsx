import React from 'react';

//icons
import {AiOutlineCaretLeft,AiOutlineCaretRight} from "react-icons/ai";



//css
import "../CSS/Cover.css"

const ImgSlider = () => {
  return (
    <>

<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="slide1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide4.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide5.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <AiOutlineCaretLeft className="carouselprev-icon" aria-hidden="true" />
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <AiOutlineCaretRight className="carouselnext-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>




    </>
  )
}

export default ImgSlider