import { Box ,Paper,Typography,Link,Button} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { useState } from "react";

function StudentDet() {
    const [checked, setChecked] = useState([]);

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

  return (
    <Box flex={10} p={2} >
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant="h6" p={1}>
        Students
    </Typography>
    <Button variant="contained" color="success" href='/studentForm'>Add Student</Button>
    </Box>
    <Paper elevation={3} >
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem
      justifyContent="flex-between"
      disablePadding
      >
    <ListItemText   primary={'Roll No'} sx={{marginLeft:'143px'}} />
    <ListItemText   primary={'Name'} sx={{marginLeft:'21px'}} />

    </ListItem>

      {[0, 1, 2, 3].map((value) => {
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
            <ListItemText  id={labelId} primary={`Line item ${value + 1}`} />
            </Link>
            <ListItemText  id={labelId} primary={'Register'} sx={{marginLeft:'30px'}} />
          </ListItem>
        );
      })}
    </List>
    </Paper>
    </Box>
  );
}

export default StudentDet;