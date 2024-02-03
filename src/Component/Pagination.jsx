import React from 'react';
//packages
import { Link } from 'react-router-dom';
//icons
import { ImArrowRight2 } from "react-icons/im";

//css
import "../CSS/Pagination.css"

const Pagination = ({Products}) => {
  

  return (
    <>
    {Products !== undefined ? <div className="pagination">
            <p to='' >{Products.category}</p>
          </div> : ""  }
     
    </>
  )
}

export default Pagination