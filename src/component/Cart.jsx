/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import ProductList from "./ProductList.jsx";
import "../Styles/Cart.scss";

const initialList = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

const Cart = (item) => {
  const [count, setCount] = useState(1);

  let TotalAmount = initialList.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);

  const [price, setPrice] = useState(100);

  let Subtotal = Number(count * price);
  console.log(typeof Subtotal);

  return (
    <div className="cartList">
      <h5 className="cartTitle" style={{ fontSize: "18px", fontWeigh: "700" }}>
        購物籃
      </h5>

      {initialList.map((product) => {
        return (
          <ProductList
            key={product.id}
            imgSrc={product.img}
            productId={product.id}
            productName={product.name}
            productPrice={product.price}
            productQuantity={product.quantity}
          />
        );
      })}
      {/* <PriceList text="運費" price="0"></PriceList> */}
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
