import React from 'react';

//css
import "../CSS/SideFilters.css"

const SideFilters = ({products}) => {

  const data = (value) =>{
      console.log(value);
  }

  return (
    <>

          <div className="check-brands" style={{marginBottom:'10px'}}>
            <h5>Brands</h5>

            {/* create a a built-in JavaScript data structure that stores unique values.   */}
            {[...new Set(products.map((pro)=> pro.brand))].map((brand,index)=>{
              return <div className="brands" key={index}>
              <input type="checkbox" className='brand-checkbox' onClick={()=>data(brand)} />
              <label htmlFor="">{brand}</label>
              </div>
            })}
            
           </div>


    </>
  )
}

export default SideFilters