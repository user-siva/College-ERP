import { Box, Typography} from '@mui/material';
import {isError, useQuery} from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import ShadowLoading from "./utils/ShadowLoading"
import axios from "axios"



function StaffProfile() {        
        const { Id } = useParams();

        const { isLoading, error, data } = useQuery({
          queryKey: ['personalData'],
          queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/subject/${Id}`)
            return res.data
          },
        })

        if(isLoading)
        {
            <ShadowLoading />
        }
        
        if(isError)
        {
            console.log("Error:",error)
        }

    return (
          <Box sx={{ width: '100%' }}>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Subject Code:</span>{data?.subject_code}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Subject Name:</span>{data?.subject_name}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Regulation:</span>{data?.regulation}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Department:</span>{data?.department}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Year:</span>{data?.year}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Semester:</span>{data?.semester}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Staff:</span>{data?.staff}</Typography> 
          </Box>        
    );
}

export default StaffProfile;