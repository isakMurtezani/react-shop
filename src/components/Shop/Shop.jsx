import { useEffect, useState } from 'react';
import './Shop.css';
import { ProductList } from '../Product/ProductList';

function Shop() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/assets/resources/json/products.json');
        const json = await response.json();
        console.log('Products ====> ', json.products);
        setProductList(json.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
