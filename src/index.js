import React from "react";
import "antd/dist/reset.css";
import ReactDOM from "react-dom/client";
import App from "./App";
//context
import { AuthContextProvider } from "./Context/authContext";
import { ProductContextProvider } from "./Context/ProductContext";
import { SingleProductContextProvider } from "./Context/SingleProContext";
import { CartContextProvider } from "./Context/CartContext";
//css
import "./CSS/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthContextProvider>
      <ProductContextProvider>
        <SingleProductContextProvider>
          <CartContextProvider>
          <App />
          </CartContextProvider >
        </SingleProductContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </>
);
