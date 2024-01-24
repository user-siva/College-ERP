import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography} from "@mui/material";
import axios from "axios"
import {
    useQuery,
  } from '@tanstack/react-query'
  
import { useState } from "react";
import ShadowLoading from '../utils/ShadowLoading';

function StudentList({deptYear}) {
  const [checked, setChecked] = useState([]);
    
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () =>
     {
      const res = await axios.get('http://localhost:5000/api/student/all')
      return res.data
     },
  })

  if (isLoading) {
    return (
      <ShadowLoading />
    )
  }

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

   

    return (
        <List
        sx={{
            width: '100%',

            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            height: 500,
            '& ul': { padding: 0 },
        }}
        subheader={<li />}
        >
        {deptYear.map((details) => (
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
    );
}

export default StudentList;