import React from 'react';

//components
import CategoryPage from '../../Component/CategoryPage';

import { useSelector } from 'react-redux';

const ComputerAccessories = () => {

    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state)=> state.allproduct);

        
    //destructure property from object
    const {loading,products,error} = productsObj;
   
    //filter ComputerAccessoriesProducts from products
   let ComputerAccessoriesProducts = products.filter((pro)=>{
    return pro.subcategory === "computer-accessories";
   })


  return (
    <>
    <CategoryPage products={ComputerAccessoriesProducts} />
    </>
  )
}

export default ComputerAccessories