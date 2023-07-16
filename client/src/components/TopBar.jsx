import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import {Typography} from '@mui/material';

function TopBar() {

  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}> 
            Thamirabharani Engineering College
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;