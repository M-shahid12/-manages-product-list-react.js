import React from "react";

export default function Product(props) {

  console.log(props.IncrementQuanitity);
  return (
    <div className="row">
      <div className="col-5">
        <h1>{props.product.name}  <span class="badge bg-secondary">₹{props.product.price}</span></h1>
      </div>
      <div className="col-3">
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger">-</button>
  <button type="button" className="btn btn-warning">{props.product.quanitity}</button>
  <button type="button" className="btn btn-success" onClick={ () => {props.IncrementQuanitity(props.index)}}>+</button>
</div>
      </div>
      {props.product.quanitity * props.product.price}
    </div>
  )
}
