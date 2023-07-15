import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SubjectTwoToneIcon from '@mui/icons-material/SubjectTwoTone';

function SideBar() {
    return (
        <Box flex={2} p={2} sx={{ overflow: 'auto',height:'100vh' }} >
        <List>
          
            <ListItem key={'Students'} disablePadding sx={{ display: 'block' }}>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={'Students'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'Staffs'} disablePadding sx={{ display: 'block' }}>
              <ListItemButton>
                <ListItemIcon>
                  <PersonOutlineTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={'Staffs'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'Subjects'} disablePadding sx={{ display: 'block' }}>
              <ListItemButton>
                <ListItemIcon>
                  <SubjectTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={'Subjects'} />
              </ListItemButton>
            </ListItem>

            
    
        </List>
        <Divider />
        <List>
          {['Time Table', 'Attendance'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton>
                <ListItemIcon
                  
                >
                  {index % 2 === 0 ? <CalendarMonthIcon /> : <AccountCircleTwoToneIcon />}
                </ListItemIcon>
                <ListItemText primary={text}  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>      
        </Box>
    );
}

export default SideBar;