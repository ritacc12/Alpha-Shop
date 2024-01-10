/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const QuantityBtn = () => {
  const [count, setCount] = useState(1);

  const decrement = (draft, action) => {
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
};

export default QuantityBtn;
