import React from 'react';

//global hook
import {GlobalProductHook} from "../../Context/ProductContext";

//components
import CategoryPage from '../../Component/CategoryPage';

const Cloths = () => {

    const {products} = GlobalProductHook();

    let clothsProducts = products.filter((pro)=>{
        return pro.subcategory === "cloths";
       })
  return (
    <>
    <CategoryPage products={clothsProducts} />
    </>
  )
}

export default Cloths