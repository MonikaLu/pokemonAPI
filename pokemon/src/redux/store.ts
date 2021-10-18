//TODO: configure store as redux toolkit
//følge tutorial, men ikke bruk samme som dem

import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { initialState } from './pokemonSlice';
import { getPokemon } from '.././api/getDataFromAPI';

const getData = createAction('slicer/getData');

const pokemonReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getData, (state, action) => {
            //deklarere state.name til name fra pokemonData
            //state.name = getPokemon();
            state.id = 1;
            state.picture = 'Picture 1';
            state.height = 15;
            state.weight = 10;
            state.type = ['Hello', 'World'];
        });
})

/*export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    }
})*/

//export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch