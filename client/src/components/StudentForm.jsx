import { Box,TextField,Paper,Typography,styled,MenuItem,Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";

const STextField = styled(TextField)({
    margin:'14px'
})

function StudentForm() {

    const [data,setData] = useState({})

    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };

    return (
        <Box
        component="form"
        sx={{
            bgcolor: 'background.default',
            display:'flex',
            justifyContent:'space-evenly'
        }}
        
        noValidate
        autoComplete="off"
        flex={10} 
        p={2}
        >   
            <Paper variant="outlined" elevation={8} 
            sx={{display:'flex',flexDirection:'column',p:3,width:'75%',height:'450px',overflow:'hidden',overflowY:'scroll'}}
            >
            <Typography variant={'h6'} sx={{color:'blue',fontSize:30}}>
                Student Form
            </Typography>
            <STextField
            label="Name"
            name="name"
            size="small"
            fullWidth
            required
            />
            <STextField
            size="small"
            label="Admission Number"
            name="admission_no"
            fullWidth
            />
            <DatePicker size='small' label='Admission Date' name='admission_date' sx={{margin:'14px'}}/>
            <STextField
            size="small"
            label="Batch"
            name="batch"
            fullWidth
            />
            <STextField
            size="small"
            label="Register No"
            name="register_no"            
            fullWidth
            />
            <STextField
            size="small"
            label="Roll No" 
            name="roll_no"             
            fullWidth
            />
            <STextField
            size="small"
            label="Age"
            name="age"
            fullWidth
            />
            <DatePicker size='small' label='Admission Date' name='admission_date' sx={{margin:'14px'}}/>
            <STextField
            size="small"
            select
            label="Gender"
            name="gender"
            >
                <MenuItem value='Male' >Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
            </STextField>
            <STextField
            size="small"
            select
            label="Department"
            name="department"
            >
                <MenuItem  value='CSE'>CSE</MenuItem>
                <MenuItem value='ECE'>ECE</MenuItem>
                <MenuItem value='ECE'>ECE</MenuItem>
                <MenuItem value='Mech'>Mech</MenuItem>
                <MenuItem value='Civil'>Civil</MenuItem>
            </STextField>
            <STextField
            size="small"
            select
            label="Year"
            name="year"
            >
                <MenuItem value='First'>First</MenuItem>
                <MenuItem value='Second'>Second</MenuItem>
                <MenuItem value='Third'>Third</MenuItem>
                <MenuItem value='Fourth'>Fourth</MenuItem>
            </STextField>
            
            <STextField
            label="Blood Group"
            name="blood_group"        
            fullWidth
            size="small"
            />
            <STextField
            label="Phone"
            name="phone"
            fullWidth
            size="small"
            />
            <STextField
            label="Email"
            name="email"
            fullWidth
            size="small"
            />
            <STextField
            label="Aadhaar No"
            name="aadhaar_no"
            fullWidth
            size="small"
            />
            <STextField
            label="Father Name"
            name="father_name"
            fullWidth
            size="small"
            />
            <STextField
            label="Father Phone No"
            name="father_phone_no"
            fullWidth
            size="small"
            />
            <STextField
            label="Father Occupation"
            name="father_occupation"
            fullWidth
            size="small"
            />
            <STextField
            label="Mother Name"
            name="mother_name"
            fullWidth
            size="small"
            />
            <STextField
            label="Mother Phone No"
            name='mother_phone_no'
            fullWidth
            size="small"
            />
            <STextField
            label="Mother Occupation"
            name="mother_occupation"
            fullWidth
            size="small"
            />
            <STextField
            label="Annual Income"
            name="annual_income"
            fullWidth
            size="small"
            />
            <STextField
            label="Nationality"
            name="nationality"
            fullWidth
            size="small"
            />
            <STextField
            label="Religion"
            name="religion"
            fullWidth
            size="small"
            />
            <STextField
            size="small"
            select
            label="Student Category"
            name="student_category"
            >
                <MenuItem value='BC'>BC</MenuItem>
                <MenuItem value='MBC'>MBC</MenuItem>
                <MenuItem value='OC'>OC</MenuItem>
                <MenuItem value='SC/ST'>SC/ST</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
            </STextField>
            <STextField
            label="Door No"
            name="door_no"
            fullWidth
            size="small"
            />
             <STextField
            label="Street"
            name="street"
            fullWidth
            size="small"
            />
             <STextField
            label="District"
            name="district"
            fullWidth
            size="small"
            />
             <STextField
            label="State"
            name="state"
            fullWidth
            size="small"
            />
             <STextField
            label="Country"
            name="country"
            fullWidth
            size="small"
            />
             <STextField
            label="Pincode"
            name="pincode"
            fullWidth
            size="small"
            />
             <STextField
            size="small"
            select
            label="Mode Of Transportation"
            name="transportation"
            >
                <MenuItem value='College Bus'>College Bus</MenuItem>
                <MenuItem value='Own Vehicle'>Own Vehicle</MenuItem>
                <MenuItem value='By Walk'>By Walk</MenuItem>
            </STextField>
            <STextField
            label="Bus Route No"
            name="bus_route_no"
            fullWidth
            size="small"
            />
             <STextField
            label="Regular Boarding Point"
            name="regular_boarding_point"
            fullWidth
            size="small"
            />
             <STextField
            label="Regular Dropping Point"
            name="regular_dropping_point"
            fullWidth
            size="small"
            />
            <STextField
            label="Gaurdian Name"
            name="gaurdian_name"
            fullWidth
            size="small"
            />
            <STextField
            size="small"
            label="Gaurdian Is"
            name="gaurdian_is"
            />
            <STextField
            size="small"
            label="Gaurdian Mobile"
            name="gaurdian_mobile"
            />
            <STextField
            size="small"
            label="Gaurdian Address"
            name="gaurdian_address"
            />
            <STextField
            size="small"
            label="Gaurdian 2 Name"
            name="gaurdian_2_name"
            />
            <STextField
            size="small"
            label="Gaurdian 2 Mobile"
            name="gaurdian_2_mobile"
            />
            <STextField
            size="small"
            label="Gaurdian 2 Address"
            name="gaurdian_2_address"
            /> 
            <STextField
            size="small"
            label="Emergency Contact"
            name="emergency_contact"
            />  
            </Paper>
            <Button variant="contained" color="success" sx={{height:'45px',width:'80px'}}>Save</Button>

        </Box>
    );
}

export default StudentForm;