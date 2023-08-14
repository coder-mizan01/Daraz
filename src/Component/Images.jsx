import React from 'react'
//image id : http://localhost:4000/api/v1/product/product-photo/${_id}

const Images = ({SingleProduct}) => {
    const {_id} = SingleProduct;

  return (
    <>
    <img src={``} alt="" />
    </>
  )
}

export default Images