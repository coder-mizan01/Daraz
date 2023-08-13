
import React,{useState} from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Quantity = ({ onChange }) => {
  const [Quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
      onChange(Quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(Quantity + 1);
    onChange(Quantity + 1); // Update with the increased value
  };

  return (
    <>
    <button onClick={handleDecrease} disabled={Quantity === 1}>
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
