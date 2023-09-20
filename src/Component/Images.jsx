import React from 'react'
//image id : 

const Images = ({SingleProduct}) => {
    const {_id} = SingleProduct;

  return (
    <>
    <img className='img-fluid' src={`https://daraz-api.onrender.com/api/v1/product/product-photo/${_id}`} alt="" />

    <div className='thumbnails'>
      <img className='thumb-img' src={`https://daraz-api.onrender.com/api/v1/product/product-photo/${_id}`} alt=""/>
      

    </div>
    </>
  )
}

export default Images