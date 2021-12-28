import { Component } from 'react';
import { SearchFilter } from './components/search-filter/search-filter.component.jsx';
import { Table } from './components/table/table.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
      title: 'User',
      answer: 47,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleFilterChange = (e) => {
    this.setState({
      searchField: e.target.value.length < 3 ? '' : e.target.value,
    });
  };

  handleIncrement = () => {
    this.setState(
      (prevState, prevProps) => {
        return { answer: prevState.answer + prevProps.increment };
      },
      () => console.log(this.state.answer)
    );
  };

  render() {
    const { monsters, searchField, answer } = this.state;

    const filteredList = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <div className="container">
          <h1>User list</h1>
          <SearchFilter
            placeholder="Search trough list"
            handleChange={this.handleFilterChange}
          />
          <p>
            Total user(s): <strong>{filteredList.length}</strong>
          </p>
        </div>
        <div className="container">
          <Table monsters={filteredList} />
        </div>
        <hr />
        <div className="container">
          <h2>Misc</h2>
          <p>{answer}</p>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </>
    );
  }
}

export default App;
