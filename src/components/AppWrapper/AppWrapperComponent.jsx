import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { MainComponent } from '../MainComponent/MainComponent.jsx'
import { Outlet } from 'react-router-dom'

function AppWrapperComponent () {
  return(
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}

export { AppWrapperComponent }
