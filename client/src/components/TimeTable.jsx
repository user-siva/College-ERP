import { Box,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Filter from "./utils/Filter";

const columns = [
    { field: 'day', headerName: 'Day' },
    {
      field: '1',
      headerName: '1',
      sortable: false,
      editable: true,
    },
    {
      field: '2',
      headerName: '2',
      sortable: false,
      editable: true,
    },
    {
      field: '3',
      headerName: '3',
      sortable: false,
      editable: true,
    },
    {
      field: '4',
      headerName: '4',
      sortable: false,
      editable: true,
    },
    {
      field: '5',
      headerName: '5',
      sortable: false,
      editable: true,
    },
    {
      field: '6',
      headerName: '6',
      sortable: false,
      editable: true,
    },
    {
      field: '7',
      headerName: '7',
      sortable: false,
      editable: true,
    },
    {
      field: '8',
      headerName: '8',
      sortable: false,
      editable: true,

    },
  ];
  
 

function TimeTable() {

    const [rows,setRows] = useState(
      [
        {id:1,day:'monday',1:"TQM",2:"CD",3:"OOP",4:"CN",5:"DBMS",6:"DAA",7:"OOP",8:"DAA"},
        {id:2,day:'Tuesday',1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""},
        {id:3,day:'Wednesday',1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""},
        {id:4,day:'Thursday',1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""},
        {id:5,day:'Friday',1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""},
        {id:6,day:'Saturday',1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""},
      ]
    );

    const onSave = () => {
      console.log("Rows:",rows)
    }

    const processRowUpdate = (updatedRow, originalRow) => {
      const rowIndex = rows.findIndex((row) => row.id === updatedRow.id);

      const updatedRows = [...rows];
      updatedRows[rowIndex] = updatedRow;

      setRows(updatedRows);
      return updatedRow;
          
      };


    return (
        <Box flex={10} p={2} sx={{ height: 500, width: '100%' }}>
           <Filter />
      <DataGrid
        rows={rows}
        columns={columns}
        processRowUpdate={processRowUpdate}
        disableRowSelectionOnClick
      />
      <Button variant="contained" color="success" onClick={onSave} sx={{height:'45px',width:'80px'}}>Save</Button>
    </Box>
    );
}

export default TimeTable;