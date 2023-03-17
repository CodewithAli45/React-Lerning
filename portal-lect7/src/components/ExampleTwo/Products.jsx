import React from 'react'

export default function Products({product, setProduct}) {

    const increaseProduct = () => {
        setProduct(product + 1)
    }

  return (
    <div>
      <h2>No. of Products is : {product} {setProduct}</h2>
      <button onClick={increaseProduct}>Add Card</button>
    </div>
  )
}
