import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import { POKEMONS } from './constants';
import { useAppDispatch } from './redux/hooks';
import { PokemonAPI, updatePokemons } from './redux/pokemonSlice';

function App() {
  const dispatch = useAppDispatch();

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
      <Table />
    </div>
  );
}

export default App;
