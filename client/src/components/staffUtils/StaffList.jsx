import List from '@mui/material/List';
import { Typography} from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ListSubheader from '@mui/material/ListSubheader';
import ShadowLoading from '../utils/ShadowLoading';
import { Link } from 'react-router-dom';
import { useState } from "react";
import {
    useQuery,
  } from '@tanstack/react-query'

function StaffList() {

    const [checked, setChecked] = useState([]);

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('http://localhost:5000/api/staff/all').then(
            (res) => res.json(),
          ),
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

    const filter_data = (department,documents) => {
        const filtered_data = documents.filter(doc => {
          return (
            ( doc.department === department)
          );
        });
        return filtered_data
       }
    
       //const dept_year = [['CSE',1],['CSE',2],['CSE',3],['CSE',4],["ECE",1],["ECE",2],["ECE",3],["ECE",4],
       //                  ["EEE",1],["EEE",2],["EEE",3],["EEE",4],["MECH",1],["MECH",2],["MECH",3],["MECH",4],
       //                  ["Civil",1],["Civil",2],["Civil",3],["Civil",4],]
       const dept_year = ['CSE','ECE','EEE','ECE','MECH']

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
        {dept_year.map((details,index_) => (
            <li key={index_}>
            <ul>
                <ListSubheader>{` ${details}`}</ListSubheader>
                {filter_data(details,data)?.map((value,index) => (
                <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                    </IconButton>
                }
                key={index}
                disablePadding
                >
                <ListItemButton role={undefined} component={Link} to={`StaffProfile/${value?._id}`} onClick={handleToggle(value)} dense>
                    
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
                        Role:&nbsp;
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

export default StaffList;