/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';
import './SingleProduct.css';

function SingleProduct({ product }) {
  // If this componet has props.product then use props
  // If not populate product with API Request to the single product

  return (
    <div className="single-product">
      <figure>
        <img src={product.image} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <span>${product.price}.00</span>
    </div>
  );
}

export { SingleProduct };
