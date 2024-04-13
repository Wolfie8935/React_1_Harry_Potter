import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // array of 2 val [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/KostaSav/hp-api/master/data/characters.json') //https://jsonplaceholder.typicode.com/users
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }); // creates a filter and .filter returns a new array and .includes is bool  
    
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => { //event created by react for us named _react
    const searchFieldString = event.target.value.toLocaleLowerCase();            
    setSearchField(searchFieldString)
  } // speed instead of throwing values again and regenerating it


  return (
    <div className="App">
      <h1 className='app-title'>Harry Potter Characters</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
} 

// class App extends Component {
//   constructor() { //constructor call
//     super();

//     this.state = { //initializing it and declaring 
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() { //mounting the values from json file
//     fetch('https://raw.githubusercontent.com/KostaSav/hp-api/master/data/characters.json') //https://jsonplaceholder.typicode.com/users
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       }));
//   }

//   onSearchChange = (event) => { //event created by react for us named _react
//     const searchField = event.target.value.toLocaleLowerCase();            
//     this.setState(() => {
//       return { searchField }
//     });
//   } // speed instead of throwing values again and regenerating it

//   render() {
//     const { monsters, searchField } = this.state; // to make it readable 
//     const { onSearchChange } = this; // again again using this so optimize

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     }); // creates a filter and .filter returns a new array and .includes is bool

//     return (
//       <div className="App">
//         <h1 className='app-title'>Harry Potter Characters</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
