import React from "react";
import Cover from "../Layout/Cover";

//Layout
import Home_Computer_Items_ from "../Layout/Home_Computer_Items_";
import Home_Headphone_Items from "../Layout/Home_Headphone_Items";
import Home_Mobile_Accessories from "../Layout/Home_Mobile_Accessories";

const Home = () => {
  return (
   <>
  <Cover />
  <Home_Computer_Items_ />
  <Home_Headphone_Items />
  <Home_Mobile_Accessories />

  </> 

  );
};

export default Home;
