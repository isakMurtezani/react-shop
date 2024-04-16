import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ShoppingCart.css';

function ShoppingCart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="transparent" className="CartButton" onClick={handleShow}>
        <svg
          className="cartSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
          />
        </svg>
      </Button>

      <Modal
        show={show}
        centered
        size="lg"
        onHide={handleClose}
        className="shopping-cart-modal">
        <Modal.Header closeButton className="shopping-cart-header">
          <Modal.Title className="shopping-cart-title">
            <h1>Cart</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="shopping-cart-body">
          <div>
            <div>
              {cartItems.map((item) => (
                <div className="productContainer" key={item.id}>
                  <div className="image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="productInfo">
                    <span className="productName">{item.name}</span>
                    <span className="itemPrice">${item.price}.00</span>
                    <div className="productAddnDelete">
                      <button
                        className="removeItemButton"
                        onClick={() => removeFromCart(item)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="addItemButton"
                        onClick={() => addToCart(item)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length > 0 ? (
              <div className="totalPrice">
                <h1>Total: ${getCartTotal()}.00</h1>
              </div>
            ) : (
              <div className="emptyMessageContainer">
                <h1 className="emptyCartMessage">Your cart is empty!</h1>
                <button onClick={handleClose} className="shop-button">
                  <Link to="/shop">Back to Shop</Link>
                </button>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="shopping-cart-footer">
          <Button
            variant="secondary"
            onClick={() => clearCart()}
            className="shopping-cart-button-clear">
            Clear Cart
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="shopping-cart-button-checkout">
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoppingCart;
