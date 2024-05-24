import React, { useEffect, useState } from 'react';
import { ProductList } from '../Product/ProductList';
import './Shop.css';

function Shop() {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const json = await response.json();
        console.log('Fetched Products:', json.products);
        setProductList(json.products);
        console.log('OVO SU KATEGORIJE' + json.products.category);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterProductsByCategory = (category) => {
    if (category === 'all') {
      return productList;
    } else {
      return productList.filter((product) => product.category === category);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="shop-frontpage">
      <div className="shop-content">
        <div className="category-filter">
          <label htmlFor="category">CATEGORIES</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}>
            <option value="all">All </option>

            <option value="beauty">Beauty</option>

            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture </option>
            <option value="groceries">Groceries </option>
          </select>
        </div>

        <ProductList products={filterProductsByCategory(selectedCategory)} />
      </div>
    </div>
  );
}

export { Shop };
