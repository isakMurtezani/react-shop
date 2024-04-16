import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  // document.addEventListener('DOMContentLoaded', function () {
  //   const menuToggle = document.getElementById('menu-toggle');
  //   const mobileMenu = document.querySelector('.mobile-menu');

  //   menuToggle.addEventListener('click', function () {
  //     mobileMenu.classList.toggle('menu-open');
  //   });
  // });
  return (
    <>
      <object className="big-screen">
        <div className="header left">
          <div>
            <Link to="/shop">SHOP</Link>
          </div>
          <div>
            <Link to="">STORY</Link>
          </div>
          <div>
            <Link to="">RETAIL</Link>
          </div>
        </div>
        <div className="header center">
          <Link to="/">
            <img
              className="logo"
              src="src/assets/images/logo.avif"
              alt="miaomiao"
            />
          </Link>
        </div>
        <div className="header right">
          {/* <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.2rem"
              height="2.2rem"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
              />
            </svg>
          </Link> */}

          <ShoppingCart />

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
        </div>
      </object>
      {/* <object>
        <i className="fa fa-bars" id="menu-toggle"></i>
      </object> */}
    </>
  );
}
export { Header };
