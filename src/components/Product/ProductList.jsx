/* eslint-disable react/prop-types */
import { SingleProduct } from './SingleProduct.jsx';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <>
      <div className="product-list-wrapper">
        {products?.map((product) => {
          // console.log("Each Product in the list =>", product)
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export { ProductList };
