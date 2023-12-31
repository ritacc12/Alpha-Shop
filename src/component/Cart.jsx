/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
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

const Cart = () => {
  const [quality, setQuality] = useState("0");
  const reduceQuality = (quality) => {
    if (quality > 1) {
      setQuality(quality - 1);
    }
  };

  const addQuality = (quality) => {
    if (quality > 0) {
      setQuality(quality + 1);
    }
  };
  return (
    <div className="cartList">
      <h5 className="cartTitle" style={{ fontSize: "18px", fontWeigh: "700" }}>
        購物籃
      </h5>

      {initialList.map((item) => (
        <>
          <div className="cartItem" key={item.id}>
            <div className="itemImg">
              <img
                src={item.img}
                className="productImg"
                style={{ width: "100px" }}
              ></img>
            </div>
            <div className="product-info">
              <div className="itemName">{item.name}</div>
              <div className="itemQty">
                <button
                  onClick={reduceQuality}
                  className="qtyBtn"
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
                <div className="quality">{item.quantity}</div>
                <button
                  className="qtyBtn"
                  onClick={addQuality}
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
        <div className="price">$300</div>
      </div>
    </div>
  );
};

export default Cart;
