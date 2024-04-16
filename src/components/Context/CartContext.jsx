import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // provjereva je li item već u kosarici

    if (isItemInCart) {
      setCartItems(
        cartItems.map(
          (cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 } // ako je item vec u kosar, povecava quantity za 1
              : cartItem // u protivnom vraca cart item
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // ako nije u kosarici, doda ga u kosaricu
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // ako je kolicina itema 1, ukloni item iz kosarice
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // ako je kolicina itema veca od 1, smanji quantity za 1
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]); // clear cart, uklanja sve produkte iz kosare i postavlja ju u prazan array
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ); // računa total cijenu svih produkta u cartu
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal
      }}>
      {children}
    </CartContext.Provider>
  );
};
