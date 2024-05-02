import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListSubheader from '@mui/material/ListSubheader';
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";
import axios from "axios"
import { motion } from "framer-motion"
import {
  useQuery,
} from '@tanstack/react-query'

import { useEffect, useState } from "react";
import ShadowLoading from '../utils/ShadowLoading';

function StudentList({ deptYear, filterData }) {
  const [checked, setChecked] = useState([]);
  const [filtered, setFiltered] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    if (filterData['department'] || filterData['year'] || filterData['semester']) {
      setFiltered(true);
    }
  }, [filterData]);

  const { isLoading, error, isFetching, refetch, isFetched, isRefetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      let res;
      if (filtered) {
        res = await axios.post('http://localhost:5000/api/student/filter_students', filterData)
        setData(res.data)
        return res.data
      }
      else {
        res = await axios.get('http://localhost:5000/api/student/all')
        setData(res.data)
        return res.data
      }
    },
  })

  useEffect(() => {
    if (filtered) {
      refetch();
    }
  }, [filtered, refetch]);

  if (isLoading || isFetching || isRefetching) {
    return (

      <ShadowLoading />
    )
  }


  if (error) {
    console.log(error.message)
    return 'An error has occurred: ' + error.message
  }

  var roman = { 4: 'IV', 3: 'III', 2: 'II', 1: 'I' }
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
    await axios.delete(`http://localhost:5000/api/student/delete/${id}`)
    console.log("Deleted")
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
      {data && deptYear.map((details, index) => {
        const filteredDataForDeptYear = filter_data(details[0], details[1], data);
        if (filteredDataForDeptYear.length > 0) {
          return (
            <li key={index} style={{ marginBottom: 3 }}>
              <ul>
                <ListSubheader>{` ${details[0]} ${roman[details[1]]} Year`}</ListSubheader>
                {filteredDataForDeptYear.map((value) => (
                  <ListItem
                    key={value.register_no + value.department + value.name}
                    secondaryAction={
                      <>
                        <IconButton component={Link} to={`/StudentEdit/${value?._id}`} edge="end" aria-label="comments">
                          <EditIcon sx={{ color: 'blue' }} />
                        </IconButton>
                        <IconButton edge="end" aria-label="comments">
                          <DeleteIcon onClick={(e) => (handleDelete(e, value._id))} sx={{ color: 'red' }} />
                        </IconButton>
                      </>
                    }
                    sx={{ width: '95%', marginLeft: 3 }}
                    component={motion.div}
                    whileHover={{
                      scale: 1.01,
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      backgroundColor: 'white',
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.97 }}
                    disablePadding
                  >
                    <ListItemButton role={undefined} component={Link} to={`StudentProfile/${value?._id}`} onClick={handleToggle(value)} dense>
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
                        sx={{ margin: '10px' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </ul>
            </li>
          );
        } else {
          return null; // Don't render ListSubheader if no students found
        }
      })}
    </List>

  );
}

export default StudentList;