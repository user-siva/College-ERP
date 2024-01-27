import {Typography} from '@mui/material'


function PersonalDetailsView({data}) {
    

    return (
        <div>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>IAT 1:</span>{data?.sem_1_iat_1}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>IAT 2:</span>{data?.sem_1_iat_2}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>IAT 3:</span>{data?.sem_2_iat_3}</Typography> 
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>GPA:</span>{data?.sem_1_gpa}</Typography> 

        </div>
    );
}

export default PersonalDetailsView;