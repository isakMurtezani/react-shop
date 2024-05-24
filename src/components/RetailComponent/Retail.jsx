import './Retail.css';

export const Retail = () => {
  return (
    <>
      <div className="retail-page">
        <div className="retail-left">
          <img
            src="https://res.cloudinary.com/dgxprxthh/image/upload/v1710864946/store_square_0000_Layer_Comp_1_czdfrs.webp"
            alt="Store"
          />
        </div>
        <div className="retail-right">
          <h3>Beauty of Joseon Flagship Store</h3>
          <p>
            Visit us at 82 Samcheong-ro, Jongno-gu, Seoul, South Korea
            <br />
            <a href="https://goo.gl/maps/FaYFiE6sDjPAWEnc9">Get Directions</a>
            <br />
            <br />
            <b>Opening hours:</b> <br />
            <br />
            Monday: Closed <br />
            Tuesday-Sunday: 11am-7pm
            <br />
          </p>
        </div>
      </div>
    </>
  );
};
