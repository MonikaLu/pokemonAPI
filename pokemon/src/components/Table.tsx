import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Table = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'picture', headerName: 'Picture', width: 130 },
        { field: 'height', headerName: 'Height', width: 130 },
        { field: 'weight', headerName: 'Weight', width: 130 },
        { field: 'type', headerName: 'Type', width: 130 },
    ];

    const rows = [
        { id: 1, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 2, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 3, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 4, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 5, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 6, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 7, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 8, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 9, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' },
        { id: 10, name: 'Snow', picture: 'Jon', height: 35, weight: 30, type: 'Green' }
    ];

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[1]}
            />
        </div>
    );
}

export default Table;

