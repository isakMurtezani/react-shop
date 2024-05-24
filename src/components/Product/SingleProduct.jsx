/* eslint-disable react/prop-types */
import toast, { Toaster } from 'react-hot-toast';
import './SingleProduct.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

function SingleProduct({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartNotification = () => {
    toast('Item added to Cart!');
  };

  return (
    <div
      className="single-product"
      onClick={() => navigate(`/product/${product.id}`)}>
      <Toaster
        gutter={10}
        toastOptions={{
          style: {
            padding: '16px',
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '0px'
          }
        }}
        position="bottom-right"
        reverseOrder={true}
      />
      <figure>
        <Link to={`/product/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} />
        </Link>
        <figcaption>{product.title}</figcaption>
      </figure>
      <span>${product.price}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
          cartNotification();
        }}
        className="addToCartButton">
        Add to Cart
      </button>
    </div>
  );
}

export { SingleProduct };
