import List from '@mui/material/List';
import { Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListSubheader from '@mui/material/ListSubheader';
import { motion } from "framer-motion"
import ShadowLoading from '../utils/ShadowLoading';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios"
import {
  useQuery,
} from '@tanstack/react-query'

function StaffList({ filterData }) {

  const [checked, setChecked] = useState([]);
  const [filtered, setFiltered] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    if (filterData['department'] || filterData['year'] || filterData['semester']) {
      setFiltered(true);
    }
  }, [filterData]);

  const { isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ['staffList'],
    queryFn: async () => {
      let res;
      if (filtered) {
        res = await axios.post('http://localhost:5000/api/staff/filter_staffs', filterData)
        setData(res.data)
        return res.data
      }
      else {
        res = await axios.get('http://localhost:5000/api/staff/all')
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

  if (isLoading || isFetching) {
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

  const handleDelete = async (e, id) => {
    await axios.delete(`http://localhost:5000/api/staff/delete/${id}`)
    console.log("Deleted")
  }

  const filter_data = (department, documents) => {
    const filtered_data = documents.filter(doc => {
      return (
        (doc?.department === department)
      );
    });
    return filtered_data
  }


  const dept_year = ['CSE', 'ECE', 'EEE', 'Civil', 'Mech']

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
      {dept_year.map((details, index_) => {
        const filteredData = filter_data(details, data);
        if (filteredData.length > 0) {
          return (
            <li key={index_}>
              <ul>
                <ListSubheader>{` ${details}`}</ListSubheader>
                {filter_data(details, data)?.map((value, index) => (
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton component={Link} to={`/StaffEdit/${value?._id}`} edge="end" aria-label="comments">
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
                            {value?.emp_category}
                          </>
                        }
                        sx={{ margin: '10px' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </ul>
            </li>
          )
        }

      })}
    </List>
  );
}

export default StaffList;