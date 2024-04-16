/* eslint-disable react/prop-types */
import toast, { Toaster } from 'react-hot-toast';
import './SingleProduct.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function SingleProduct({ product }) {
  const { addToCart } = useContext(CartContext);
  const cartNotification = () => {
    toast('Item added to Cart!');
  };

  // If this componet has props.product then use props
  // If not populate product with API Request to the single product

  return (
    <div className="single-product">
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
        <img src={product.image} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <span>${product.price}.00</span>
      <button
        onClick={() => {
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
