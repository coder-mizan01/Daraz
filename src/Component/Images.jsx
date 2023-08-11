import React from 'react'

const Images = ({SingleProduct}) => {
    const {_id} = SingleProduct;

  return (
    <>
    <img src={`http://localhost:4000/api/v1/product/product-photo/${_id}`} alt="" />
    </>
  )
}

export default Images