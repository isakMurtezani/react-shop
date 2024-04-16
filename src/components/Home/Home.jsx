// import { useEffect, useState } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
// import { Shop } from '../Shop/Shop.jsx';

export const Home = () => {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   console.log('MEOW');
  //   fetch('src/assets/resources/json/products.json')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log('setting Products =======> ', json.products);
  //       setProductList(json.products);
  //     });
  // }, []);

  return (
    <div className="home">
      <div className="headline-wrapper">
        <div className="video-container">
          <video autoPlay muted loop id="background-video">
            <source
              src="https://res.cloudinary.com/dgxprxthh/video/upload/v1712764930/Beauty_of_Joseon_-_Dynasty_Cream_HaruTube_proxhv.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="content">
            <h1>Hanbang Skincare and more : BOJ</h1>
            <p>
              Dive into our curated collection of fan-favorite Hanbang skincare
              products. Loved for their proven efficacy, elevate your skincare
              routine with these must-haves!
            </p>

            <Link to="/shop">
              <button className="shop-button">SHOP BEST SELLERS </button>
            </Link>
          </div>
        </div>

        <div className="h2-section">
          <p>Treat Your Skin Concern with Hanbang + Modern Ingredients </p>
        </div>

        <div className="tabs">
          <p>ACNE AND BREAKOUTS</p>
          <p>DRYNESS</p>
          <p>PORES AND SEBUM</p>
          <p>WRINKLES</p>
          <p>DULLNES AND UNEVEN TONE</p>
        </div>
      </div>

      <div className="article-container">
        <div className="article-left">
          <p id="subtitle">Transform your Suncare to Skincare</p>

          <p id="paragraph">
            A lot of people attribute how quickly their skin ages to their
            genetics, but it turns out that external factors play a huge role in
            skin aging. Sun exposure can account for almost 90 percefnt of
            premature aging and other factors such as pollution and smoking can
            factor into how quickly your skin ages.
          </p>

          <button className="shop-button">
            <Link to="/shop">BUY PLS</Link>
          </button>
        </div>

        <div className="article right">
          <img
            className="article-right-img"
            src="https://res.cloudinary.com/dgxprxthh/image/upload/v1712665222/BOJ_Sun_Trio_1_700X__85949_jbc3xd.jpg"
            alt="ablablabla"
          />
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-title">SELF CARE</div>
      </div>
    </div>
  );
};
