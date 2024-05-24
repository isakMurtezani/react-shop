import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailedProductView.css';

function DetailedProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const json = await response.json();
        console.log('Fetched product:', json);
        setProduct(json);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (productId) {
      fetchProduct();
    } else {
      console.error('Product ID is undefined');
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailed-product-view">
      <img src={product.thumbnail} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
}

export { DetailedProductView };
