import { Link } from 'react-router-dom'

function SingleProduct(){
  return(
    <div className={'single-product'}>
      <h2>Some product title</h2>
      <Link to='/about' > Goto about page</Link>
      <br/><br/>
      <a href={'/about'}> Go to about page via normal link</a>
    </div>
  )
}

export { SingleProduct }
