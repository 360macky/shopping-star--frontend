import React from 'react';

function ProductCard(props) {
  return (
    <div className="card-product">
      <div className="product-image-container">
        <div className="product-image" style={{backgroundImage: `url(${props.image})`}}></div>
      </div>
      <h3 className="text-center text-success">{props.name}</h3>
      <button className="btn btn-success btn-block">$ {props.price}</button>
    </div>
  );
}

export default ProductCard;
