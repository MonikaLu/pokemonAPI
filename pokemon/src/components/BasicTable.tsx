import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable() {
    function createData(
        name: string,
        id: number,
        height: number,
        weight: number,
        picture: string,
        type: string[]
    ) {
        return { name, id, height, weight, picture, type };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 'hello', ['ey', 'boom']),
        createData('Ice cream sandwich', 237, 9.0, 37, 'world', ['ey', 'boom']),
        createData('Eclair', 262, 16.0, 24, 'boom', ['ey', 'boom']),
        createData('Cupcake', 305, 3.7, 67, 'yay', ['ey', 'boom']),
        createData('Gingerbread', 356, 16.0, 49, 'yyyy', ['ey', 'boom']),
    ];

    //Tar inn all data fra samme kolonne, og DES/ASC for å velge sort
    /* function sortColumn(row: number[], orderBy: string) {
        if (orderBy == 'ASC') {
            
        }
         rows.map((row) => row.name);
         rows.map((row) => row.height);
         rows.map((row) => row.weight);
         rows.map((row) => row.type);
         rows.map((row) => row.picture);
         
     }

     function hideColumn(column) {

     }
    */

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Picture</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Weight</TableCell>
                        <TableCell align="right">Height</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">     {row.name}  </TableCell>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.weight}</TableCell>
                            <TableCell align="right">{row.height}</TableCell>
                            <TableCell align="right">{row.picture}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}