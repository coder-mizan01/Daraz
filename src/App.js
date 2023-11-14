import React, { useEffect } from "react";

//css
import "./CSS/App.css";

import Router from "./Router/Router.js";

//
import { useSelector , useDispatch } from "react-redux";
import { fetchAllProduct } from "./Redux/AllProducts";

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
