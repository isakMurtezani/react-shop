import './App.css';
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css';
import { DetailedProductView } from './components/Product/DetailedProductView.jsx';
import { Shop } from './components/Shop/Shop.jsx';
import { Register } from './components/Register/Register.jsx';
import { Retail } from './components/RetailComponent/Retail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapperComponent />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/product/:productId" element={<DetailedProductView />} />
          <Route path="retail" element={<Retail title={'Retail'} />} />
          <Route path="register" element={<Register title={'Register'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
