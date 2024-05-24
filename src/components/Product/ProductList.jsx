import React from 'react';
import { SingleProduct } from './SingleProduct.jsx';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <>
      <div className="product-list-wrapper">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export { ProductList };
