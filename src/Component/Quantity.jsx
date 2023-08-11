import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

//css
import "../CSS/Quantity.css"

const Quantity = ({onChange}) => {
  const [Quantity, setQuantity] = useState(0);

  const handleDecrease = () =>{
     if(Quantity > 0){
      setQuantity(Quantity - 1);
      onChange(Quantity - 1);
     }
  }

  const handleIncrease = () =>{
    if(Quantity > 1){
      setQuantity(Quantity + 1);
      onChange(Quantity -1);
    }
  }
  return (
    <>
    <button onClick={handleDecrease} disabled={Quantity === 0}>
        <AiOutlineMinus />
      </button>
  {" "}
      <p>{Quantity} </p>{" "}

      <button onClick={handleIncrease}>
        <AiOutlinePlus
          
        />
      </button>
    </>
  );
};

export default Quantity;
