import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>
      <Link to={props.urll}><button>Try It</button></Link>
      </p>
    </div>
  );
}