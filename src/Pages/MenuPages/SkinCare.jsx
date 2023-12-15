import React from "react";

import { useSelector } from "react-redux";
//components
import CategoryPage from "../../Component/CategoryPage";

const SkinCare = () => {
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state) => state.allproduct);

  //destructure property from object
  const { loading, products, error } = productsObj;

  //filter skincareproducts from products
  let SkinCareProducts = products.filter((pro) => {
    return pro.subcategory === "skin-care";
  });

  return (
    <>
      <CategoryPage products={SkinCareProducts} />
    </>
  );
};

export default SkinCare;
