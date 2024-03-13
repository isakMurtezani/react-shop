import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function DetailedProductView(){
  const urlParams = useParams()
  const [product, setProduct] = useState({});
  const URLProductID = urlParams.id;
  console.log("URL params DetailedProductView =>", urlParams);
  console.log("ID from param", URLProductID);

  useEffect(() => {
    // MAKE A REQUESTO TOWARDS WEBSHOP API
    fetch('https://dummyjson.com/products/'+URLProductID)
      .then(res => res.json())
      .then(json => {
        console.log("Product => ", json)
        setProduct(json)
      })

  }, []);

  return (
    <div>
      <img src={product.thumbnail} alt={product.title + " image"}
           height={500}
           style={{padding: 20}}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export { DetailedProductView }
