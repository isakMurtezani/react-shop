import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-wrapper">
      <div>
        <figure>
          <img
            src="https://res.cloudinary.com/dgxprxthh/image/upload/v1712764890/joseon_big_gsgusa.svg"
            alt="Logotip"
          />
        </figure>

        <div className="footer-links">
          <Link to={'https://www.instagram.com/'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </Link>
          <Link to={'https://www.facebook.com/'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 1536 1536">
              <path
                fill="currentColor"
                d="M1248 0q119 0 203.5 84.5T1536 288v960q0 119-84.5 203.5T1248 1536h-188V941h199l30-232h-229V561q0-56 23.5-84t91.5-28l122-1V241q-63-9-178-9q-136 0-217.5 80T820 538v171H620v232h200v595H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0z"
              />
            </svg>
          </Link>
          <Link to={'https://www.tiktok.com/explore'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.6em"
              height="2.6em"
              viewBox="0 0 1024 1024">
              <path
                fill="currentColor"
                d="M912 224.962C912 162.575 861.425 112 799.038 112H224.962C162.575 112 112 162.575 112 224.962v574.076C112 861.426 162.575 912 224.962 912h574.076C861.425 912 912 861.426 912 799.038zM774.759 460.916c-51.615.577-99.71-15.027-141.938-43.927v202.874c0 90.166-61.72 167.62-148.996 187.848c-119.068 27.165-219.864-58.954-232.577-161.835c-13.294-102.884 52.322-193.051 152.892-213.281c19.651-4.045 49.209-4.045 64.458-.577v108.661c-4.692-1.153-9.086-2.31-13.709-2.888c-39.304-6.937-77.371 12.715-92.977 48.55c-15.605 35.838-5.16 77.451 26.629 101.73c26.586 20.806 56.085 23.694 86.14 9.822c30.057-13.291 46.21-37.567 49.676-70.512c.578-4.622.546-9.826.546-15.028V222.206c0-10.981.086-10.502 11.068-10.502h86.12c6.36 0 8.673.915 9.25 8.433c4.621 67.047 55.526 124.147 120.838 132.818c6.937 1.155 14.369 1.613 22.58 2.19z"
              />
            </svg>
          </Link>
          <Link to={'https://twitter.com/'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.2em"
              height="2.2em"
              viewBox="0 0 16 16">
              <path
                fill="currentColor"
                d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
              />
            </svg>
          </Link>
        </div>
        <div className="copyright">
          <span>
            <i className="patience">Made with Patience™</i>
          </span>
        </div>
      </div>
    </div>
  );
}

export { Footer };
