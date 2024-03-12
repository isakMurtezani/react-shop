import { Outlet } from 'react-router-dom'

function MainComponent(){
  return (
    <div className={'main'} id={'main'}>
      <Outlet />
    </div>
  )
}

export { MainComponent }
