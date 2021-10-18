import React from 'react';
import './App.css';
import MyTable from './components/Table';
import { getPokemon, initializeData } from './api/getDataFromAPI';

function App() {
  console.log(initializeData());

  return (
    <div className="App">
      <header>
      </header>
      <MyTable />

    </div>
  );
}

export default App;
