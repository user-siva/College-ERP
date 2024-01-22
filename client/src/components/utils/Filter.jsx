import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box ,Button} from "@mui/material";


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

function Filter() {
    return (
        <Box component="form" sx={{display:'flex',justifyContent:'flex-start'}}>
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
    );
}

export default Filter;