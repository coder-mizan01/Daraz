import React from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../Redux/ProductQuantityReducer";

const Quantity = () => {
  
  const Quantity = useSelector((state) => state.productquantitycounter.count);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(Decrement());
        }}
        disabled={Quantity === 1}
      >
        <AiOutlineMinus />
      </button>{" "}

      <p>{Quantity} </p>{" "}

      <button
        onClick={() => {
          dispatch(Increment());
        }}
      >
        <AiOutlinePlus />
      </button>
    </>
  );
};

export default Quantity;
