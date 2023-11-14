import React from 'react';

import { useSelector } from 'react-redux';

//components
import CategoryPage from '../../Component/CategoryPage';

const Shoes = () => {

    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state)=> state.allproduct);
        
    //destructure property from object
    const {loading,products,error} = productsObj;

   //filter ShoesProducts from products
    let ShoesProducts = products.filter((pro)=>{
        return pro.subcategory === "shoes";
       })

  return (
    <>
     <CategoryPage products={ShoesProducts} />
    </>
  )
}

export default Shoes