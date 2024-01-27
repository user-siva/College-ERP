import {Typography} from '@mui/material'


function PersonalDetailsView({data}) {
    return (
        <div>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Admission Fees:</span>{data?.admission_fees}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Tuition Fees:</span>{data?.tution_fees}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Bus Fees:</span>{data?.bus_fees}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Hostel Fees:</span>{data?.hostel_fees}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Previous Year Balance:</span>{data?.previous_year_balance}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Total Fees:</span>{data?.total_fees}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>FGG Scholarship:</span>{data?.fgg}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>PMSS Scholarship:</span>{data?.pmss}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>7.5% Reservations Quota:</span>{data?.seven_point_five}</Typography>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>KET Scholarship:</span>{data?.ket}</Typography>

        </div>
    );
}

export default PersonalDetailsView;