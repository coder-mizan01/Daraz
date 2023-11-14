import React, { useEffect } from "react";

//css
import "./CSS/App.css";

import Router from "./Router/Router.jsx";

//
import { useSelector , useDispatch } from "react-redux";
import { fetchAllProduct } from "./Redux/AllProducts.jsx";

function App() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
       dispatch(fetchAllProduct())
     },[])
     
  return (
    <>
      <Router />
    </>
  );
}

export default App;
