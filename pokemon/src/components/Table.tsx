import React, { useEffect } from 'react';
import { DataGrid, GridColDef, GridRowData } from '@mui/x-data-grid';
import { useAppSelector } from '.././redux/hooks';
import { IStats, PokemonState } from '../redux/pokemonSlice';
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography } from '@material-ui/core';
import { POKEMONS } from '../constants';

const MyTable = () => {
    const pokemons = useAppSelector(state => state.pokemons);

    useEffect(() => {
        console.log(pokemons);
    }, [pokemons])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100, disableColumnMenu: true, sortable: true },
        {
            field: 'name', headerName: 'Name', width: 400, disableColumnMenu: true, sortable: false, renderCell: (cellValues) => {
                return (
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{cellValues.row.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {cellValues.row.stats.map((stat: IStats) => stat.stat.name)}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
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
        </div >
    );
}

export default MyTable;