import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const Sofa = () => {
    const products = useSelector((state)=> state.allproduct)
    console.log(products);

  return (
    <div>Sofa</div>
  )
}

export default Sofa