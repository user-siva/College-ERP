import List from '@mui/material/List';
import { Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListSubheader from '@mui/material/ListSubheader';
import ShadowLoading from '../utils/ShadowLoading';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import {
  useQuery,
} from '@tanstack/react-query'

function SubjectList() {
  const [checked, setChecked] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:5000/api/subject/all').then(
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

  const filter_data = (department, year, documents) => {
    const filtered_data = documents.filter(doc => {
      return (
        (doc.department === department) &&
        (doc.year === year)
      );
    });
    return filtered_data
  }

  const handleDelete = async (e, id) => {
    await axios.delete(`http://localhost:5000/api/subject/delete/${id}`)
    console.log("Deleted")
  }

  const dept_year = [['CSE', 1], ['CSE', 2], ['CSE', 3], ['CSE', 4], ["ECE", 1], ["ECE", 2], ["ECE", 3], ["ECE", 4],
  ["EEE", 1], ["EEE", 2], ["EEE", 3], ["EEE", 4], ["MECH", 1], ["MECH", 2], ["MECH", 3], ["MECH", 4],
  ["Civil", 1], ["Civil", 2], ["Civil", 3], ["Civil", 4],]
  //const dept_year = [['CSE',4],['ECE',4], ['CSE',3],['MECH',4]]

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
      {dept_year.map((details) => (
        <li key={`section-${details[1]}`}>
          <ul>
            <ListSubheader>{` ${details} Year`}</ListSubheader>
            {filter_data(details[0], details[1], data)?.map((value) => (
              <ListItem
                key={value.register_no + value.department + value.name}
                secondaryAction={
                  <>
                    <IconButton component={Link} to={`/SubjectEdit/${value?._id}`} edge="end" aria-label="comments">
                      <EditIcon sx={{ color: 'blue' }} />
                    </IconButton>
                    <IconButton edge="end" aria-label="comments">
                      <DeleteIcon onClick={(e) => (handleDelete(e, value._id))} sx={{ color: 'red' }} />
                    </IconButton>
                  </>
                }
                disablePadding
              >
                <ListItemButton role={undefined} component={Link} to={`SubjectProfile/${value?._id}`} onClick={handleToggle(value)} dense>

                  <ListItemText
                    primary={value?.subject_name}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Staff:&nbsp;
                        </Typography>
                        {value?.staff}
                      </>
                    }
                    sx={{ margin: '10px' }}
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

export default SubjectList;