import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MyTable from './components/Table';
import { POKEMONS } from './constants';
import { addPokemon, PokemonAPI, PokemonState, updatePokemons } from './redux/pokemonSlice';
import { RootState } from './redux/store';

function App() {
  const dispatch = useDispatch();

  const initializeData = () => {
    let results: Array<PokemonAPI> = [];
    POKEMONS.forEach(async (pokemon) => {
      await axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
        results.push(response.data);
      }
      )
      dispatch(updatePokemons(results));
    })
  }

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <div className="App">
      <header>
      </header>
      <MyTable />
    </div>
  );
}

export default App;
