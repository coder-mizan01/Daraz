 
  import { configureStore  } from "@reduxjs/toolkit";


  //authentication file 
  import Authentication from "./Redux/Authentication";

  //product file
  import FetchAllProduct from "./Redux/FetchAllProduct";

  //single product
  import SingleProduct from "./Redux/SingleProduct";

  //cart Item
  import CartItem from "./Redux/CartItem";
import ProductQuantity from "./Redux/ProductQuantity";
import FilterProduct from "./Redux/FilterProduct";


  const store = configureStore({
    reducer: {
      authentication: Authentication,
      allproduct: FetchAllProduct,
      singleproduct : SingleProduct,
      cart : CartItem,
      productquantitycounter : ProductQuantity,
      filterproduct : FilterProduct
    },
  });

  export default store