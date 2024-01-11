/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import QuantityBtn from "./Quantitybtn.jsx";
import PriceList from "./PriceList.jsx";
import "../Styles/Cart.scss";
import { initialList } from "./CartContext.js";

const Cart = (item) => {
  let TotalAmount = initialList.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);

  return (
    <div className="cartList">
      <h5 className="cartTitle" style={{ fontSize: "18px", fontWeigh: "700" }}>
        購物籃
      </h5>

      {initialList.map((item) => (
        <>
          <div className="cartItem">
            <div className="itemImg">
              <img
                src={item.img}
                className="productImg"
                style={{ width: "100px" }}
              ></img>
            </div>
            <div className="product-info">
              <div className="itemName" key={item.id}>
                {item.name}
              </div>
              <QuantityBtn quantity={item.quantity} itemInfo={item} />
            </div>
            <div className="itemPrice">${item.price}</div>
          </div>
        </>
      ))}
      <div className="cart-info shipping line">
        <div className="amount">運費</div>
        <div className="price">免費</div>
      </div>
      <div className="cart-info total line">
        <div className="amount">小計</div>
        <div className="price total">{TotalAmount}</div>
      </div>
    </div>
  );
};

export default Cart;

//   function tasksReducer(draft, action) {
//     switch (action.type) {
//       case "added": {
//         const productId = action.id;
//         const targetItem = draft.find((item) => item.id === productId);
//         targetItem.quantity++;
//         let totalAmount = 0;
//         draft.forEach((item) => {
//           if (item.id !== "total") {
//             totalAmount += item.quantity * item.price;
//           }
//         });

//         const newTotal = draft.find((item) => item.id === "total");
//         newTotal.totalAmount = totalAmount;
//         break;
//       }
//       case "decreased": {
//         const productId = action.id;

//         const targetItem = draft.find((item) => item.id === productId);
//         targetItem.quantity--;

//         let totalAmount = 0;
//         draft.forEach((item) => {
//           if (item.id !== "total") {
//             totalAmount += item.quantity * item.price;
//           }
//         });

//         const newTotal = draft.find((item) => item.id === "total");
//         newTotal.totalAmount = totalAmount;
//         break;
//       }
//       default: {
//         throw Error("Unknown action: " + action.type);
//       }
//     }
//   }
// };
