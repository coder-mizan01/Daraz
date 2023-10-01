import React from 'react'
import config from ".././config.json"

const Images = ({SingleProduct}) => {
    const {_id} = SingleProduct;

  return (
    <>
    <div className="Images">
    <img className='img-fluid' src={`${config.apiUrl}/api/v1/product/product-photo/${_id}`} alt="" />
    <div className='thumbnails'>
      <img onClick={()=>alert('feauter will added')} className='thumb-img' src={`${config.apiUrl}/api/v1/product/product-photo/${_id}`} alt=""/>
      

    </div>
    </div>
    

    </>
  )
}

export default Images