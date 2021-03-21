import React from "react";
import '../styles/Main.css'
import Product from './Product'



const Main = (props) => {
  const { products, addItems } = props
  
  return(
    <main className="main">
      <h2>Catalog</h2>
      <div>
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            addItems={addItems}
          />
        ))}
      </div>
    </main>
  )
}

export default Main