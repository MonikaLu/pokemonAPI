import axios from "axios";
import { POKEMONS, AVAILABLE_COLUMNS } from './../constants';

//Henter ut data
export const getPokemon = async (name: string) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {

        return response.data;
    }
    )
};


export const initializeData = async () => {
    await Promise.all(POKEMONS.map(async pokemon => getPokemon(pokemon))).then((value) => { console.log(value[0]) });
    return (await Promise.all(POKEMONS.map(async pokemon => getPokemon(pokemon))));

}


