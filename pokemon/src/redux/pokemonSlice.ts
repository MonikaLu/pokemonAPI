//TODO: lage en slice basert på eksempelet på redux toolkit
//må koble pokemonSlice.reducer i store. 

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import type { RootState } from './store'

interface PokemonState {
    id: number,
    name: string,
    picture: string,
    weight: number,
    height: number,
    type: string[]
}

export const initialState: PokemonState = {
    id: 0,
    name: "",
    picture: "",
    weight: 0,
    height: 0,
    type: ['', '']
}

export const pokemonSlice = createSlice({
    name: 'slicer', initialState, reducers: {

    }
})