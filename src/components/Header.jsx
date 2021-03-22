import React, { useState } from "react";
import '../styles/Header.css'
import { Link } from "react-router-dom";



const Header = (props) => {
  const { cartItems } = props

  const totalPrice = () => {
    return cartItems.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return(
    <header className="header">
        <div className="nav-links">
        <ul>
          <li>
             <Link 
              to="/" 
              className="demo-link"
            >
              Shopping Cart Demo
            </Link>
          </li>
          <li>
            <Link to="/" className="catalog-link">Catalog</Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="cart-link"
            >
              Cart ({totalPrice()})
            </Link>
          </li>
          <li>
            <Link to="/search" className="catalog-link">
              <i className="fas fa-search"></i>
            </Link>
          </li>
        </ul>
        </div>
        <div className="nav-links">
          <ul>
            <li>
            <Link 
              to={{ pathname: "https://github.com/ayse8888/mindsite-project" }} 
              target="_blank"
            >
              GitHub
            </Link>
            </li>
          </ul>
        </div>
    </header>
  )
}



export default Header