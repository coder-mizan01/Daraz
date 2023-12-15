import React from 'react';

//components
import CategoryPage from '../../Component/CategoryPage';

//
import { useSelector } from 'react-redux';

const Cloths = () => {

    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state)=> state.allproduct);
    
    //destructure property from object
    const {loading,products,error} = productsObj;

    //filter cloths products from products
    let clothsProducts = products.filter((pro)=>{
        return pro.subcategory === "cloths";
       });


  return (
    <>
    <CategoryPage products={clothsProducts} />
    </>
  )
}

export default Cloths