import React, { useState } from 'react';
import '../styles/Search.css'



const Search = (props) => {
  const { products } = props
  const [searchTerm,setSearchTerm] = useState([]);
  const [results, setResults] = useState([])
  
  const submitHandler = (event) => {
    event.preventDefault()

  const term = products.filter(value => {
    if(value.name
      .toString()
      .toLowerCase()
      .includes(searchTerm.toString().toLowerCase())) {
        return value
      }
    })

  const results = term.map(item => item)
    console.log(results)
    setResults(results)
  }

  return (
    <div className="search">
      <form 
        className="form" 
        onSubmit={submitHandler} 
      >  
        <input 
          type="text" 
          placeholder="Search Products" 
          name="query" 
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input" 
        />
        <button 
          onClick={submitHandler} 
          type="submit" 
          className="search-button"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
        <div className='products-container'>
            {
              results.map(item=>{
                return( 
                  <div className='search-items' key={item.id}>
                    <h4 className='item-name'>
                      {item.name}
                    </h4>
                    <img 
                      className="item-image" 
                      src={item.image} 
                      alt={item.name}
                    />
                    <p className="item-price">
                      Price : ${item.price}
                    </p>
                  </div>
                  )
                })
            }
        </div>
    </div>
  );
};

export default Search;

