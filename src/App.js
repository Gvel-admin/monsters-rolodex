import { useEffect, useState } from 'react';
import { SearchFilter } from './components/search-filter/search-filter.component.jsx';
import { Table } from './components/table/table.component';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const [answer, setAnswer] = useState(() => 47);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  });

  function handleFilterChange(e) {
    setSearchField(e.target.value.length < 3 ? '' : e.target.value);
  }

  function handleDecrement() {
    setAnswer((prevState) => prevState - 1);
  }
  function handleIncrement() {
    setAnswer((prevState) => prevState + 1);
  }

  const filteredList = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h1>User list</h1>
        <SearchFilter
          placeholder="Search a name"
          handleChange={handleFilterChange}
        />
        <p>
          Total user(s): <strong>{filteredList.length}</strong>
        </p>
      </div>
      <div className="container">
        {filteredList.length > 0 ? (
          <Table monsters={filteredList} />
        ) : (
          <span className="warning">No data... Try another name.</span>
        )}
      </div>
      <hr />
      <div className="container">
        <h2>Misc</h2>
        <button onClick={handleDecrement}>-</button>
        <span> {answer} </span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
}

export default App;
