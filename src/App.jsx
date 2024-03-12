import './App.css'
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Page } from './components/Page/Page.jsx'
import { Product } from './components/Product/Product.jsx'
import { SingleProduct } from './components/Product/SingleProduct.jsx'
import { Home } from './components/Home/Home.jsx'
import { ProductList } from './components/Product/ProductList.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Page title={"Contact"} />} />
            <Route path='/about' element={<Page />} />
            <Route path='/product' element={<Outlet />} >
              <Route index element={<ProductList />} />
              <Route path='/product/:id' element={<SingleProduct />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
