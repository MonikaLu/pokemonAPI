//TODO: lage en slice basert på eksempelet på redux toolkit
//må koble pokemonSlice.reducer i store. 

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokemonState {
    id: number,
    name: string,
    picture: string,
    weight: number,
    height: number,
    type: string[]
}

interface ITypes {
    slot: number,
    type: {
        name: string,
        url: string,
    }
}

export interface PokemonAPI extends PokemonState {
    sprites: { front_default: string },
    types: Array<ITypes>,
}

export const initialState: Array<PokemonState> = [];

//TODO: hva skal gjøres her?
//Hensikt: 
//Action: deklarere en verdi til PokemonState.
export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        updatePokemons(state, action: PayloadAction<Array<PokemonAPI>>) {
            let tempState: Array<PokemonState> = [];

            action.payload.forEach((pokemon) => {
                const pokemonType = pokemon.types.map(item => item.type.name);
                tempState.push({ id: pokemon.id, picture: pokemon.sprites.front_default, name: pokemon.name, weight: pokemon.weight, height: pokemon.height, type: pokemonType });
            })
            return tempState;
        },
        addPokemon(state, action: PayloadAction<PokemonAPI>) {
            const pokemon = action.payload;
            const pokemonType = pokemon.types.map(item => item.type.name);
            return [...state, { id: pokemon.id, picture: pokemon.sprites.front_default, name: pokemon.name, weight: pokemon.weight, height: pokemon.height, type: pokemonType }];
        }
    }
})

export const { updatePokemons, addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;