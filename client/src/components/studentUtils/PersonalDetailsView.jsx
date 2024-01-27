import {Typography} from '@mui/material'


function PersonalDetailsView({data}) {
    

    return (
        <div>
            <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Name:</span>{data?.name}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Admission No:</span>{data?.admission_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Admission Date:</span>{data?.admission_date}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Batch</span>{data?.batch}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Register Number:</span>{data?.register_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Roll Number:</span>{data?.roll_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Age:</span>{data?.age}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Date of Birth:</span>{data?.dob}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gender</span>{data?.gender}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Department:</span>{data?.department}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Year:</span>{data?.year}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Blood Group:</span>{data?.blood_group}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Phone</span>{data?.phone}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Email</span>{data?.email}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Aadhaar Number:</span>{data?.aadhaar_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Father Number:</span>{data?.father_name}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Father's Phone Number:</span>{data?.father_phone_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Father's Occupation</span>{data?.father_occupation}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Mother Name</span>{data?.mother_name}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Mother's Phone Number</span>{data?.mother_phone_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Mother's Occupation</span>{data?.mother_occupation}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Annual Income:</span>{data?.annual_income}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Nationality:</span>{data?.nationality}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Religion:</span>{data?.religion}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Student Category:</span>{data?.student_category}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Door Number:</span>{data?.door_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Street:</span>{data?.street}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>District:</span>{data?.district}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>State:</span>{data?.state}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Pincode:</span>{data?.pincode}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Transportation</span>{data?.transportation}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Bus Route Number:</span>{data?.bus_route_no}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Regular Boarding Point:</span>{data?.regular_boarding_point}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Regular Dropping Point:</span>{data?.regular_dropping_point}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gaurdian Name:</span>{data?.gaurdian_name}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gaurding Mobile:</span>{data?.gaurdian_mobile}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gaurding Address:</span>{data?.gaurdian_address}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gaurding 2 Name:</span>{data?.gaurdian_2_name}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gaurdian 2 Mobile:</span>{data?.gaurdian_2_mobile}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Gaurdian 2 Address:</span>{data?.gaurdian_2_address}</Typography> 
                <Typography sx={{margin:'5px'}}><span style={{fontWeight:'bold',marginRight:'5px'}}>Emergency Contact:</span>{data?.emergency_contact}</Typography>
        </div>
    );
}

export default PersonalDetailsView;