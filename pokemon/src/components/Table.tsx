import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const MyTable = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100, disableColumnMenu: true, sortable: true },
        { field: 'name', headerName: 'Name', width: 400, disableColumnMenu: true, sortable: false },
        {
            field: 'picture', headerName: 'Picture', width: 130, sortable: false, renderCell: (cellValues) => {
                return (
                    //Kan endre ID til en counter senere og for-loop, slik at bildene blir ulike.
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}></img>
                )
            }
        },
        { field: 'height', headerName: 'Height', width: 130 },
        { field: 'weight', headerName: 'Weight', width: 130 },
        { field: 'type', headerName: 'Type', width: 130, sortable: false },
    ];

    const rows = [
        { id: 1, name: 'Snow', picture: 'picture', height: 35, weight: 30, type: 'Green' },
        { id: 2, name: 'Betty', picture: 'Jon', height: 40, weight: 30, type: 'Green' },
        { id: 3, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 4, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 5, name: 'Sissel', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 6, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 7, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 8, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 9, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 10, name: 'Candy', picture: 'Jon', height: 35, weight: 30, type: 'Green' }
    ];

    //TODO: Name and ID are not totally mandatory atm.
    //It is still possible to hide them through DisplayColumnsMenu


    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[1]}
                disableSelectionOnClick
            />
        </div >
    );
}

export default MyTable;