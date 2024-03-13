import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useEffect } from 'react'

function SingleProduct({product}){
  // If this componet has props.product then use props
  // If not populate product with API Request to the single product
  console.log("product", product)
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        {/*<Link to={"/product/"+product.id}> Detail View </Link>*/}
        <Button as={Link} to={"/product/"+product.id} variant="primary">Detail view</Button>
      </Card.Body>
    </Card>
  )
}

export { SingleProduct }
