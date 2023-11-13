import { Box,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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

      const departments = [
        {
          value: 'CSE',
          label: 'CSE',
        },
        {
          value: 'ECE',
          label: 'ECE',
        },
        {
          value: 'EEE',
          label: 'EEE',
        },
        {
          value: 'Mechanical',
          label: 'MECH',
        },
        {
          value: 'Civil',
          label: 'Civil',
        },
      ];
    
      const year = [
        {
          value: '1 year',
          label: '1 year',
        },
        {
          value: '2 year',
          label: '2 year',
        },
        {
          value: '3 year',
          label: '3 year',
        },
        {
          value: '4 year',
          label: '4 year',
        }
      ];

    return (
        <Box flex={10} p={2} sx={{ height: 500, width: '100%' }}>
           <Box component="form" sx={{display:'flex',justifyContent:'flex-start',margin:1}}>
      <TextField
          id="outlined-select-department"
          select
          label="Department"
          defaultValue="CSE"
          helperText="Please select the department"
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-year"
          select
          label="Year"
          defaultValue="1 year"
          helperText="Please select the year"
          sx={{marginLeft:"10px"}}
        >
          {year.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" sx={{height:'45px',marginLeft:'10px'}}>Filter</Button>
      </Box>
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