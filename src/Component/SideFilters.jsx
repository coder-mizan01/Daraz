import React from 'react'

const SideFilters = ({products}) => {

  return (
    <>

          <div className="check-brands" style={{marginBottom:'10px'}}>
            <h5>Brands</h5>

            {/* create a a built-in JavaScript data structure that stores unique values.   */}
            {[...new Set(products.map((pro)=> pro.brand))].map((brand,index)=>{
              return <div className="brands" key={index}>
              <input type="checkbox" value={brand} />
              <label htmlFor="">{brand}</label>
              </div>
            })}
            
           </div>


    </>
  )
}

export default SideFilters