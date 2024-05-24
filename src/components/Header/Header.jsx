import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'animate.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <object className="big-screen">
        <div className="header left">
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link to="/shop">SHOP</Link>
          </div>
          <div>
            <Link to="/retail">RETAIL</Link>
          </div>
        </div>
        <div className="header center">
          <Link to="/">
            <img
              className="logo"
              src="https://aiming.pl/wp-content/uploads/2024/01/Beauty-of-Joseon-logo-300x300.jpg"
              alt="miaomiao"
            />
          </Link>
        </div>
        <div className="header right">
          <ShoppingCart />
          <Link to="/register">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.2rem"
              height="2.2rem"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
              />
            </svg>
          </Link>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </button>
      </object>
      {menuOpen && (
        <div className="mobile-menu animate__animated animate__fadeIn ">
          <Link to="/shop" onClick={toggleMenu}>
            SHOP
          </Link>
          <Link to="/retail" onClick={toggleMenu}>
            RETAIL
          </Link>
          <ShoppingCart />
          <Link to="/register" onClick={toggleMenu}>
            REGISTER
          </Link>
        </div>
      )}
    </div>
  );
};

export { Header };
