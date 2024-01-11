/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function QuantityBtn() {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 0) {
      setCount((previousCount) => previousCount - 1);
    }
  };

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <div className="itemQty">
      <button
        className="qtyBtn minus"
        onClick={decrement}
        style={{
          borderRadius: "50%",
          border: "0",
          width: "26px",
          height: "27px",
        }}
      >
        {" "}
        -{" "}
      </button>
      <div className="quantity">{count}</div>
      <button
        className="qtyBtn plus"
        onClick={increment}
        style={{
          borderRadius: "50%",
          border: "0",
          width: "26px",
          height: "27px",
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
