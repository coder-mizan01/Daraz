 
  import { configureStore  } from "@reduxjs/toolkit";


  //authentication file 
  import Authentication from "./Redux/Authentication";

  //product file
  import FetchAllProduct from "./Redux/FetchAllProduct";

  //single product
  import SingleProduct from "./Redux/SingleProduct";


import ProductQuantity from "./Redux/ProductQuantity";
import FilterProduct from "./Redux/FilterProduct";

import Fetch_Computer_Items from "./Redux/Fetch_Computer_Items";

//cart Item
import CartItem from "./Redux/CartItem";


  const store = configureStore({
    reducer: {
      authentication: Authentication,
      allproduct: FetchAllProduct,
      computer_products : Fetch_Computer_Items,
      singleproduct : SingleProduct,
      cart : CartItem,
      productquantitycounter : ProductQuantity,
      filterproduct : FilterProduct,
    },
  });

  export default store