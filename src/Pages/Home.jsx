import React from "react";
import Cover from "../Layout/Cover";

//Layout
import Home_Headphone_Items from "../Layout/Home_Headphone_Items";
import Home_Mobile_Accessories from "../Layout/Home_Mobile_Accessories";
import Home_Other_Items from "../Layout/Home_Other_Items";

const Home = () => {
  return (
   <>
  <Cover />

  <Home_Headphone_Items />
  <Home_Mobile_Accessories />
  <Home_Other_Items />

  </> 

  );
};

export default Home;
