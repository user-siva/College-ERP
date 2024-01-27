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
            const res = await axios.get(`http://localhost:5000/api/staff/${Id}`)
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
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Name:</span>{data?.name}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Employee ID:</span>{data?.emp_id}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Employee Category:</span>{data?.emp_category}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Date Of Birth:</span>{data?.dob}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Father Name:</span>{data?.father_name}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Mother Name:</span>{data?.mother_name}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Phone:</span>{data?.phone}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Email:</span>{data?.email}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Age:</span>{data?.age}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Date of Joining:</span>{data?.date_of_joining}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gender:</span>{data?.gender}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Blood Group:</span>{data?.blood_group}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Home Contact Number:</span>{data?.home_contact_id}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Aadhaar No:</span>{data?.aadhaar_no}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Father's Phone Number:</span>{data?.father_phone_no}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Mother's Phone Number:</span>{data?.mother_phone_no}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Nationality:</span>{data?.nationality}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Religion:</span>{data?.religion}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Door Number:</span>{data?.door_no}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Street:</span>{data?.street}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>District:</span>{data?.district}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>State:</span>{data?.state}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Country:</span>{data?.country}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Pin Code:</span>{data?.pin_code}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Mode Of Transportation:</span>{data?.mode_of_transportation}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Bus Route Number:</span>{data?.bus_route_no}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Regular Boarding point:</span>{data?.regular_boarding_point}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>regular Dropping Point:</span>{data?.regular_dropping_point}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Marital Status:</span>{data?.marital_status}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Spouse Name:</span>{data?.spouse_name}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Children Count:</span>{data?.children_count}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Qualification:</span>{data?.qualification}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Experience:</span>{data?.experience}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Office Door Number:</span>{data?.office_door_no}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Office Area:</span>{data?.office_area}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Office District:</span>{data?.office_district}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Office State:</span>{data?.office_state}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Office Country:</span>{data?.office_country}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Office Pincode:</span>{data?.office_pincode}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Emergency Contact:</span>{data?.emergency_contact}</Typography> 
          </Box>        
    );
}

export default StaffProfile;