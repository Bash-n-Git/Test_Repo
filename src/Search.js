import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Add your search logic here
    console.log('Search query:', query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          required
        />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
};

export default Search;
