import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
function Profile() {
    const { Id } = useParams();
    return (
        <Box flex={10} p={2} sx={{overflow:"auto"}}>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            <Typography sx={{margin:'50px'}}>Student Id:{Id}</Typography>
            

        </Box>
    );
}

export default Profile;