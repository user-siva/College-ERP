import { Box,Typography } from "@mui/material";
import StaffDetails from "./staffUtils/StaffDetails";

function StaffForm() {

    return (
        <Box
        component="form"
        noValidate
        autoComplete="off"
        flex={10} 
        p={2}
        >   
        <Typography variant={'h6'} sx={{color:'blue',fontSize:30,margin:'10px'}}>
                Staff Form
            </Typography>
        <Box 
        sx={{
            bgcolor: 'background.default',
            display:'flex',
            justifyContent:'space-evenly'
        }}>
            <StaffDetails />
        </Box>

        </Box>
    );
}

export default StaffForm;