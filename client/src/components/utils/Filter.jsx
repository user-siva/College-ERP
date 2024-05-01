import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button } from "@mui/material";
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

const semesters = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  }
];

function Filter({ sendData }) {

  const [data, setData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = (
      name === 'year' || name === 'semester'
    )
      ? Number(value) : value;

    setData((prev) => ({ ...prev, [name]: newValue }));
  };

  const doFilter = async () => {
    sendData(data)
  }

  return (
    <Box component="form" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
      <TextField
        id="outlined-select-department"
        select
        label="Department"
        name="department"
        onChange={handleChange}
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
        onChange={handleChange}
        helperText="Please select the year"
        sx={{ marginLeft: "10px" }}
      >
        {year.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-year"
        select
        label="Semester"
        name="semester"
        onChange={handleChange}
        helperText="Please select the Semester"
        sx={{ marginLeft: "10px" }}
      >
        {semesters.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" sx={{ height: '45px', marginLeft: '10px' }} onClick={doFilter}>Filter</Button>
    </Box>
  );
}

export default Filter;