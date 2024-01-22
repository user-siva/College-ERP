import { Box,styled,Button,Stack,Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StaffDetails from "./staffUtils/StaffDetails";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });



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
            <Stack spacing={2}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
            </Button>
            </Stack>
        </Box>

        </Box>
    );
}

export default StaffForm;