import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import './AppWrapper.css';
import { Outlet } from 'react-router-dom';

function AppWrapperComponent() {
  return (
    <div className={'page-wrapper'}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export { AppWrapperComponent };
