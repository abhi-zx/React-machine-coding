import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchBarResults from './components/SearchBarResults';

function App() {
  const [results,setResults]= useState([])
  return (
    <div className="App">
     <div  className="searchBarConatiner">
      <SearchBar setResults={setResults}></SearchBar>
      <SearchBarResults results={results}></SearchBarResults>
     </div>
    </div>
  );
}

export default App;
