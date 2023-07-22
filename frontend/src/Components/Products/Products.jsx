import React from "react";
import "./Products.scss";

const Products = (props) => {
  return (
    <div className="iten">
      <p   className="product-flag">{props.flag}</p>
      <img className="product-img" src={props.imgURL} alt={props.name}  />
      <h2  className="product-name">{props.name}</h2>
      <h4  className="product-price">R$ {props.price}</h4>
      <p   className="product-installments">{props.installments}</p>
      <p   className="product-discount">{props.discount}</p>
    </div>
  );
};

export default Products;
