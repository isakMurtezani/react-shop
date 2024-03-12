import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { MainComponent } from '../MainComponent/MainComponent.jsx'
import { Outlet } from 'react-router-dom'
import './AppWrapper.css'


function AppWrapperComponent () {
  return(
    <div className={'page-wrapper'}>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

export { AppWrapperComponent }
