import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//context
import { ProductContextProvider } from "./Context/ProductContext";
import { SingleProductContextProvider } from "./Context/SingleProContext";
import { CartContextProvider } from "./Context/CartContext";
import { FilterContextProvider } from "./Context/FilterContext";

import { Provider } from "react-redux";

//store
import store from "./store";

//css
import "./CSS/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>

      <ProductContextProvider>
        <SingleProductContextProvider>
           <FilterContextProvider>
          <CartContextProvider>
          <Provider store={store} >
          <App />
          </Provider>
          </CartContextProvider >
          </FilterContextProvider>
        </SingleProductContextProvider>
      </ProductContextProvider>
     
  </>
);
