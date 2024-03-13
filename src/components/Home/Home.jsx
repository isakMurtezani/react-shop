
import reactLogo from '../../../src/assets/react.svg';
import * as jsonImages from './images.json'

const images = {
  reactLogo: '/src/assets/vite.svg',
  unsplashImage: 'https://i.imgur.com/3wRX5S0.jpeg'
}

console.log("jsonImages", jsonImages);

import './Home.css'
import { Product } from '../Product/Product.jsx'
import { ProductList } from '../Product/ProductList.jsx'

function Home(){
  return(
    <div className={'home'}>
      <div className={'sidebar'}>
        <img src={jsonImages.unsplashImage} alt={"SVG LOGO REACT"} height={200} width={200}/>
        <div className={'bg-header'}></div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
      <div className={'right'}>
        <h2>Amazing webshop</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, fuga, nemo! A ad, autem cupiditate debitis eius exercitationem fuga in libero non obcaecati recusandae repudiandae temporibus vel veniam veritatis voluptates!</p>
        <ProductList />
      </div>
    </div>
  )
}
export { Home }
