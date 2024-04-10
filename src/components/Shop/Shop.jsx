import { useEffect, useState } from 'react';
import './Shop.css';
import { ProductList } from '../Product/ProductList';

function Shop() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('src/assets/resources/json/products.json')
      .then((res) => res.json())
      .then((json) => {
        console.log('Products ====> ', json.products);
        setProductList(json.products);
      });
    console.log('MOJI PROIZVODI JSON = >>>>>>>>>', productList);
  });

  return (
    <>
      <div className="shop-frontpage">
        <div className="shop-filter">
          to be populated with a product filter <i>soon</i>
        </div>
        <div className="shop-content">
          <ProductList products={productList} />
        </div>
      </div>
    </>
  );
}

export { Shop };
