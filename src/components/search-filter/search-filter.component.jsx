import './search-filter.style.css';

export const SearchFilter = ({ placeholder, handleChange }) => {
  return (
    <>
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </>
  );
};
