import React, { useState } from 'react';
import Products from './ExampleTwo/Products';
import Cart from './ExampleTwo/Cart';

export function App() {
  const [product, setProduct] = useState(0);

  return (
    <div>
      <Products product={product} setProduct={setProduct} />
      <Cart product={product} />
    </div>
  )
}
