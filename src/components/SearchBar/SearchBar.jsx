import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit} role="search">
      <label htmlFor="search" className={styles.srOnly}>
        Search posts
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search posts..."
        value={query}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton} aria-label="Search">
        \uD83D\uDD0D
      </button>
    </form>
  );
};

export default SearchBar;
