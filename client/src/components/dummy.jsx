import { Box ,Typography,Button} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ListSubheader from '@mui/material/ListSubheader';
import Filter from "./utils/Filter";
import {
  useQuery,
} from '@tanstack/react-query'

import { useState } from "react";

function StudentDet() {
  const [checked, setChecked] = useState([]);
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:5000/api/student/').then(
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
  
   const filter_data = (department,year,documents) => {
    const filtered_data = documents.filter(doc => {
      return (
        ( doc.department === department) &&
        (doc.year === year)
      );
    });
    return filtered_data
   }

   //const dept_year = [['CSE',1],['CSE',2],['CSE',3],['CSE',4],["ECE",1],["ECE",2],["ECE",3],["ECE",4],
   //                  ["EEE",1],["EEE",2],["EEE",3],["EEE",4],["MECH",1],["MECH",2],["MECH",3],["MECH",4],
   //                  ["Civil",1],["Civil",2],["Civil",3],["Civil",4],]
   const dept_year = [['CSE',4], ['CSE',3],['MECH',4]]

  return (
    <Box flex={10} p={2} >

    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant="h6" p={1}>
        Students
    </Typography>
    <Button variant="contained" color="success" href='/studentForm'>Add Student</Button>
    </Box>

    <Filter />

    <List
      sx={{
        width: '100%',

        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {dept_year.map((details) => (
        <li key={`section-${details[1]}`}>
          <ul>
            <ListSubheader>{` ${details} Year`}</ListSubheader>
            {filter_data(details[0],details[1],data)?.map((value) => (
              <ListItem
              key={value.register_no+value.department+value.name}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                
                <ListItemText
                primary={value?.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Register No:&nbsp;
                    </Typography>
                    {value?.register_no}
                  </>
                }
                sx={{margin:'10px'}}
              />
              </ListItemButton>
            </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>

    </Box>
  );

    
}

export default StudentDet;