import React from "react";
import '../styles/Product.css'


const Product = (props) => {
  const { product, addItems } = props;
  
  return(
    <div className="products">
      <div className="image-div">
        <img 
          className="image" 
          src={product.image} 
          alt={product.name}
        />
      </div>
      <div>
        <div>
          <p>{product.name}</p>
          <p 
            className="hidden" 
            style={{display:"none"}}
          >
            Want to Buy More ?
          </p>
        </div>
        <div className="button-div">
          <button 
            onClick={() => addItems(product)} 
            className="buy-button"
          >
            Buy
          </button>
          <p className="price-text">${product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product