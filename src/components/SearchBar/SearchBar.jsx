import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.elements.search.value.trim());
  };
  return (
    <header className={styles.searchHeader}>
      <form className={styles.searchField} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          <GoSearch size="24" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
