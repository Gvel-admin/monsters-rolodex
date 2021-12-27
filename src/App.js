import { Component } from 'react';
import { SearchFilter } from './components/search-filter/search-filter.component.jsx';
import { Table } from './components/table/table.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredList = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <SearchFilter
          placeholder="Search trough list"
          handleChange={this.handleChange}
        />
        <Table monsters={filteredList} />
      </div>
    );
  }
}

export default App;
