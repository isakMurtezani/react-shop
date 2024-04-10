import './App.css';
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent.jsx';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page/Page.jsx';
import { Home } from './components/Home/Home.jsx';
import { ProductList } from './components/Product/ProductList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailedProductView } from './components/Product/DetailedProductView.jsx';
import { Shop } from './components/Shop/Shop.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Page title={'Contact'} />} />
            <Route path="/shop" element={<Shop title={'Shop'} />} />
            <Route path="/story" element={<Page title={'Story'} />} />
            <Route path="/product" element={<Outlet />}>
              <Route index element={<ProductList />} />
              <Route path="/product/:id" element={<DetailedProductView />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
