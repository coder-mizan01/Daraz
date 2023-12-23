import React, { useEffect } from "react";

//css
import "./CSS/App.css";

import Router from "./Router/Router.jsx";

//
import { useSelector , useDispatch } from "react-redux";
import {FetchAllProduct} from "./Redux/FetchAllProduct.jsx";

function App() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
       dispatch(FetchAllProduct())
     },[])
     
  return (
    <>
      <Router />
    </>
  );
}

export default App;
