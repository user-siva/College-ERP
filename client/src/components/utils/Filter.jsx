import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box ,Button} from "@mui/material";
import axios from "axios";
import { useState } from 'react';

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
      value: 'MECH',
      label: 'MECH',
    },
    {
      value: 'Civil',
      label: 'Civil',
    },
  ];

  const year = [
    {
      value: 1,
      label: '1 year',
    },
    {
      value: 2,
      label: '2 year',
    },
    {
      value: 3,
      label: '3 year',
    },
    {
      value: 4,
      label: '4 year',
    }
  ];

function Filter({onFilter}) {

    const [data,setData] = useState([[]])

    const handleChange = (e) => {
    console.log('e.target.value:',e.target)
    };

    const doFilter = async () => {
      console.log("hello")
      onFilter(data)
      console.log(data)
    }

    return (
        <Box component="form" sx={{display:'flex',justifyContent:'flex-start'}}>
      <TextField
          id="outlined-select-department"
          select
          label="Department"
          name="department"
          onClick={handleChange}
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
          name="year"
          onClick={handleChange}
          helperText="Please select the year"
          sx={{marginLeft:"10px"}}
        >
          {year.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" sx={{height:'45px',marginLeft:'10px'}} onClick={doFilter}>Filter</Button>
      </Box>
    );
}

export default Filter;