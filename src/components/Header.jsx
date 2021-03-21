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

  if ( window.location.pathname === "github" ){
    window.location.href = "https://github.com/ayse8888/mindsite-project"
  }

  console.log("window", window.location.pathname)
  return(
    <header className="header">
        <div className="nav-links">
          <Link 
          to="/" 
          className="demo-link"
        >
          Shopping Cart Demo
        </Link>
        <Link to="/" className="catalog-link">Catalog</Link>
        <Link 
          to="/cart" 
          className="cart-link"
        >
          Cart ({totalPrice()})
        </Link>
        <Link to="/search" className="catalog-link">
          <i className="fas fa-search"></i>
        </Link>
        </div>
        <div className="nav-links">
          <Link to={{ pathname: "https://github.com/ayse8888/mindsite-project" }} target="_blank">GitHub</Link>
        </div>
    </header>
  )
}



export default Header