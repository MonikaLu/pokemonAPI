import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowData } from '@mui/x-data-grid';
import { useAppSelector } from '.././redux/hooks';
import { IStats, PokemonState } from '../redux/pokemonSlice';
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography } from '@material-ui/core';
import { POKEMONS } from '../constants';

const MyTable = () => {
    const pokemons = useAppSelector(state => state.pokemons);
    const [activePokemon, setActivePokemon] = useState<GridRowData | null>(null)

    useEffect(() => {
        console.log(pokemons);
    }, [pokemons])

    const handleDetails = (pokemon: GridRowData) => {
        setActivePokemon((activePokemon && activePokemon.name === pokemon.name) ? null : pokemon);
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100, disableColumnMenu: true, sortable: true },
        {
            field: 'name', headerName: 'Name', width: 400, disableColumnMenu: true, sortable: false, renderCell: (cellValues) => {
                return (
                    <div onClick={() => handleDetails(cellValues.row)}>
                        {cellValues.row.name}
                    </div>
                )
            }
        },
        {
            field: 'picture', headerName: 'Picture', width: 130, sortable: false, renderCell: (cellValues) => {
                return (
                    <img src={`${cellValues.row.picture}`}></img>
                )
            }
        },
        { field: 'height', headerName: 'Height', width: 130 },
        { field: 'weight', headerName: 'Weight', width: 130 },
        { field: 'type', headerName: 'Type', width: 130, sortable: false },
    ];

    return (
        <div style={{ height: 700, width: '100%' }}>
            {pokemons.length < POKEMONS.length && <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
            }
            {pokemons.length >= POKEMONS.length && <DataGrid
                rows={pokemons}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[1]}
                disableSelectionOnClick
            />}
            {activePokemon &&
                <div>
                    <p>{activePokemon.stats.map((stat: IStats) => <p>{stat.stat.name}: {stat.base_stat}</p>)}</p>
                </div>}
        </div >
    );
}

export default MyTable;