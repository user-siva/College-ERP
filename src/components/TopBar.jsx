import { AppBar, Toolbar, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { useState } from 'react';

function TopBar() {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton size='large' onClick={handleDrawerOpen} >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={open}
                    onClose={handleDrawerClose}
                >
                    <Box p={2} width='250px' textAlign='center'>
                        <Typography variant='h6' component='div'>
                            Side Bar
                        </Typography>
                    </Box>
                </Drawer>
                Topbar
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;