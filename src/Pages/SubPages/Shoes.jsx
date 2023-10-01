import React from 'react';


//global hook
import {GlobalProductHook} from "../../Context/ProductContext";

//components
import CategoryPage from '../../Component/CategoryPage';

const Shoes = () => {

    const {products} = GlobalProductHook();

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