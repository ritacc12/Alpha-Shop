/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import QuantityBtn from "./Quantitybtn.jsx";
import "../Styles/Cart.scss";

export function ProductList({ imgSrc, productId, productName, productPrice }) {
  //let [productList, setProductList] = useState([]);

  return (
    <>
      <div className="cartItem">
        <div className="itemImg">
          <img
            src={imgSrc}
            className="productImg"
            style={{ width: "100px" }}
          ></img>
        </div>
        <div className="product-info">
          <div className="itemName" key={productId}>
            {productName}
          </div>
          <QuantityBtn productId={productId}></QuantityBtn>
        </div>
        <div className="itemPrice">${productPrice}</div>
      </div>
    </>
  );
}

export default ProductList;
