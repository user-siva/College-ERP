import { Box ,Paper,Typography,Link,Button} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {
  useQuery,
} from '@tanstack/react-query'

import { useState } from "react";

function StudentDet() {
  const [checked, setChecked] = useState([]);
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://127.0.0.1:8000/student/').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) {
    console.log(error.message)
    return 'An error has occurred: ' + error.message
  }
  

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
    <Box flex={10} p={2} >
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant="h6" p={1}>
        Students
    </Typography>
    <Button variant="contained" color="success" href='/studentForm'>Add Student</Button>
    </Box>
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
    <Paper elevation={3} >    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginTop:'30px' }}>
    <ListItem
      justifyContent="flex-between"
      disablePadding
      >
    <ListItemText   primary={'Roll No'} sx={{marginLeft:'143px'}} />
    <ListItemText   primary={'Name'} sx={{marginLeft:'21px'}} />

    </ListItem>

      {data.map((value) => {
        console.log("values:",value)
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton  disablePadding role={undefined} onClick={handleToggle(value)} >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
            </ListItemButton>
            <Link href="#" underline="none" sx={{color:'black'}}>
            <ListItemText  id={labelId} primary={value.details.register_no} />
            </Link>
            <ListItemText  id={labelId} primary={value.name} sx={{marginLeft:'30px'}} />
          </ListItem>
        );
      })}
    </List>
    </Paper>
    </Box>
  );

    
}

export default StudentDet;