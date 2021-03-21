import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import data from '../data'
import Header from './Header'
import Main from './Main'
import Cart from './Cart'
import Search  from './Search'




const AppContainer = () => {
  const [cartItems, setCartItems] = useState([])
  const { products } = data;

  // adding items to cart and increasing in the cart
  const addItems = (product) => {
    const itemExist = cartItems.find(item => item.id === product.id)
    if(itemExist){
      setCartItems(cartItems.map(item => item.id === product.id ? {...itemExist, quantity : itemExist.quantity + 1} : item))
    } else {
      setCartItems([...cartItems, {...product, quantity : 1}])
    }

    // want to buy more function
    // let hiddenText = document.querySelector(".hidden")
    // console.log(hiddenText)
    // hiddenText.style.display === "none" ? hiddenText.style.display = "block" : hiddenText.style.display = "none"
  }

  //decreasing items in the cart
  const decreaseItems = (product) => {
    const itemExist = cartItems.find(item => item.id === product.id)
    if(itemExist.quantity === 1){
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems(cartItems.map(item => item.id === product.id ? {...itemExist, quantity : itemExist.quantity - 1} : item))
    }
  }
  
  return (
     <BrowserRouter>
        <div className="">
          <Header cartItems={cartItems} />
           <Switch>
            <Route exact path="/search">
              <Search products={products}/>
            </Route>
            <Route exact path="/">
              <Main 
                addItems={addItems} 
                products={products}
              />
            </Route>
             <Route exact path="/cart">
              <Cart 
                addItems={addItems} 
                decreaseItems={decreaseItems} 
                cartItems={cartItems} 
                setCartItems={setCartItems}
              />
            </Route>
          </Switch>
        </div>
     </BrowserRouter>
  );
}

export default AppContainer
