import React from "react";
import { Link } from "react-router-dom";
import '../styles/Cart.css'


const Cart = (props) => {
  const { cartItems, addItems, decreaseItems, setCartItems 
  } = props

  const itemsPrice = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0)

  // remove all items
  const emptyCart = () => {
    setCartItems([]);
  };

  // remove items one by one
  const removeFromCart = (productToRemove) => {
    setCartItems(
      cartItems.filter((product) => product !== productToRemove)
    );
  };

  return(
    <div className="cart">
      <div>
        {cartItems.length === 0 && 
          <div  className="no-items-div">
            <p>
              Empty cart! You have no items in your cart, go to{' '}
              <Link to="/">catalog</Link>  
              {' '}and select some.
            </p>
            <button className="see-button">
              <Link to="/">See Catalog 
              <i className="fas fa-angle-double-right"></i>
              </Link>
            </button>
          </div>
        }
      </div>
      <div className="cart-items">
        {cartItems.length > 0 && 
          <>
            <div className="item-titles">
              <p className="item-list product">Product</p>
              <p className="item-list quantity">Quantity</p>
              <p className="item-list price">Price</p>
              <p className="item-list total">Total	</p>
            </div>
            {cartItems.map(item => (
              <div key={item.id} className="items">
                <div className="product-items-div">
                  <div>
                    <img 
                      className="cart-image" 
                      src={item.image} 
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div className="button-div">
                    <div>
                      <p>{item.quantity}</p>
                    </div>
                    <div className="buttons">
                      <button 
                        onClick={() => addItems(item)}
                      >
                        <i className="fas fa-plus-circle icon"></i>
                      </button>
                      <button 
                        onClick={() => decreaseItems(item)}
                      >
                        <i className="fas fa-minus-circle icon"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="remove-div">
                    {cartItems.length !== 0 && (
                      <p>
                        ${item.price * item.quantity}
                      </p>
                    )}
                      <button 
                        onClick={() => removeFromCart(item)}
                      >
                        <i className="fas fa-times icon cross"></i>
                      </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-price-div">
              {cartItems.length !== 0 && (
                <h5>${itemsPrice.toFixed(2)}</h5>
              )}
            </div>
          </>
        }
      </div>
      <div className="clear-all-div">
       {cartItems.length > 0 && (
        <button 
          className="see-button" 
          onClick={emptyCart}
        >
          Empty Cart
        </button>
      )}
      </div>
    </div>
  )
}

export default Cart