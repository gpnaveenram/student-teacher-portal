import React, { useState } from 'react';
import styles from './searchInput.module.css';

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <input
      className={styles.searchInput}
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className={styles.btn}  id="btnNavbarSearch" type="button"> <i style={{color:'white'}} className="fas fa-search"></i></button>
    </div>
    
  );
};

export default SearchInput;
