import React from "react";
import { MdNavigateNext } from "react-icons/md";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>
        <button>Try It</button>
      </p>
    </div>
  );
}