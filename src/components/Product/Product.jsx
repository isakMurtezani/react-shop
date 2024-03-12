import { Outlet } from 'react-router-dom'

function Product(){
  return (
    <div className={'product-wrapper'}>
      <Outlet />
    </div>
  )
}
export { Product }
