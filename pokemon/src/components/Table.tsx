import React from 'react';
import MUIDataTable from "mui-datatables";

const Table = () => {
    const columns = ["Name", "Picture", "ID", "Weight", "Height", "Types"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY", "Dummy", "Values"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        selectableRowsHeader: false,
        displayRowCheckbox: false
    }



    return (
        <MUIDataTable
            title={"Pokemons"}
            data={data}
            columns={columns}
            options={options}
        />
    )
}


export default Table;

