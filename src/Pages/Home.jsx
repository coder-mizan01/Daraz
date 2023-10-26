import React from "react";
import Cover from "../Layout/Cover";

//components
import HomeProducts from "../Component/HomeProducts";
import ElectronicSlide from "../Layout/ElectronicSlide";
import MensFashionSlide from "../Layout/MensFashionSlide";

const Home = () => {
  return (
   <>
    <Cover />
   <ElectronicSlide />
  <MensFashionSlide /> 
  </> 

  );
};

export default Home;
