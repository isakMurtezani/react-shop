import { Outlet } from 'react-router-dom'

function MainComponent(){
  return (
    <div className={'main'}>
      {/*<h2>Here will be your main content</h2>*/}
      <Outlet />
    </div>
  )
}

export { MainComponent }
