import React, { useState, useEffect } from 'react';
import SearchContext from './SearchContext.js';

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState(() => {
    const savedSearch = localStorage.getItem('search');
    return savedSearch ? JSON.parse(savedSearch) : null;  // Set initial state to null if no search is saved
  });

  useEffect(() => {
    localStorage.setItem('search', JSON.stringify(search));
  }, [search]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
