import { Box,TextField,Paper,Typography,styled,MenuItem,Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from "react";

const STextField = styled(TextField)({
    margin:'14px'
})

function StaffForm() {

    
const [data,setData] = useState({
    name:"",
    emp_id:"",
    emp_category:"",
    dob:dayjs(),
    mother_name:"",
    phone:"",
    email:"",
    age:"",
    date_of_joining:dayjs(),
    gender:"",
    blood_group:"",
    home_contact_id:"",
    aadhaar_no:"",
    father_phone_no:"",
    mother_phone_no:"",
    nationality:"",
    religion:"",
    door_no:"",
    street:"",
    district:"",
    state:"",
    country:"",
    pin_code:"",
    mode_of_transportation:"",
    bus_route_no:"",
    regular_boarding_point:"",
    regular_dropping_point:"",
    marital_status:"",
    spouse_name:"",
    children_count:"",
    qualification:"",
    experience:"",
    office_door_no:"",
    office_area:"",
    office_district:"",
    office_state:"",
    office_country:"",
    office_pincode:"",
    emergency_contact:""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const onSave = () => {
        console.log(data)
    }

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
            <Paper variant="outlined" 
            sx={{display:'flex',flexDirection:'column',p:3,width:'75%',height:'450px',overflow:'hidden',overflowY:'scroll'}}
            >
            <Typography variant={'h6'} sx={{color:'blue',fontSize:30}}>
                Staff Form
            </Typography>

            <STextField
            label="Name"
            size="small"
            name="name"
            value={data.name}
            onChange={handleChange}
            fullWidth
            required
            />
            <STextField
            size="small"
            name="emp_id"
            value={data.emp_id}
            onChange={handleChange}
            label="Employee ID"             
            fullWidth
            />
            <STextField
            size="small"
            name="emp_category"
            value={data.emp_category}
            onChange={handleChange}
            select
            label="Employee Category"
            >
                <MenuItem value='Assistent Professor' >Assistent Professor</MenuItem>
                <MenuItem value='Professor' >Professor</MenuItem>
                <MenuItem value='Lab Staff' >Lab Staff</MenuItem>
                <MenuItem value='Supporting Staff' >Supporting Staff</MenuItem>
                <MenuItem value='Driver' >Driver</MenuItem>
                <MenuItem value='Maintanence Staff' >Maintanence Staff</MenuItem>
            </STextField>
            <DatePicker 
            name="dob" value={data.dob} onChange={handleChange} size='small' label={'Date of Birth'} sx={{margin:'14px'}}/>
            <STextField
            size="small"
            label="Father Name"
            name="father_name"
            value={data.father_name}
            onChange={handleChange}
            fullWidth
            />
            <STextField
            size="small"
            label="Mother Name" 
            name="mother_name"
            value={data.mother_name}
            onChange={handleChange}           
            fullWidth
            />
            <STextField
            size="small"
            label="Phone" 
            name="phone"
            value={data.phone}
            onChange={handleChange}            
            fullWidth
            />
            <STextField
            size="small"
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
            fullWidth
            />
            <STextField
            size="small"
            label="Age"
            name="age"
            value={data.age}
            onChange={handleChange}
            fullWidth
            />
            <DatePicker 
            name="date_of_joining"
            value={data.date_of_joining}
            onChange={handleChange}
            size='small' label={'Date of Joining'} sx={{margin:'14px'}}/>
            <STextField
            size="small"
            select
            label="Gender"
            name="gender"
            value={data.gender}
            onChange={handleChange}
            >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
            </STextField>
            
            <STextField
            label="Blood Group"   
            name="blood_group"
            value={data.blood_group}
            onChange={handleChange}     
            fullWidth
            size="small"
            />
            <STextField
            label="Home Contact No"
            name="home_contact_id"
            value={data.home_contact_id}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            label="Aadhaar No"
            name="aadhaar_no"
            value={data.aadhaar_no}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            label="Father Phone No"
            name="father_phone_no"
            value={data.father_phone_no}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            label="Mother Phone No"
            name="mother_phone_no"
            value={data.mother_phone_no}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            label="Nationality"
            name="nationality"
            value={data.nationality}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            label="Religion"
            name="religion"
            value={data.religion}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            label="Door No"
            name="door_no"
            value={data.door_no}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            label="Street"
            name="street"
            value={data.street}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            label="District"
            name="district"
            value={data.district}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            label="State"
            name="state"
            value={data.state}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            label="Country"
            name="country"
            value={data.country}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            label="Pincode"
            name="pin_code"
            value={data.pin_code}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            size="small"
            name="mode_of_transportation"
            value={data.mode_of_transportation}
            onChange={handleChange}
            select
            label="Mode Of Transportation"
            >
                <MenuItem value='College Bus'>College Bus</MenuItem>
                <MenuItem value='Own Vehicle'>Own Vehicle</MenuItem>
                <MenuItem value='By Walk'>By Walk</MenuItem>
            </STextField>
            <STextField
            label="Bus Route No"
            name="bus_route_no"
            value={data.bus_route_no}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            label="Regular Boarding Point"
            name="regular_boarding_point"
            value={data.regular_boarding_point}
            onChange={handleChange}
            fullWidth
            size="small"
            />
             <STextField
            label="Regular Dropping Point"
            name="regular_dropping_point"
            value={data.regular_dropping_point}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            size="small"
            name="marital_status"
            value={data.marital_status}
            onChange={handleChange}
            select
            label="Marital Status"
            >
                <MenuItem value='Single'>Single</MenuItem>
                <MenuItem value='Married'> Married</MenuItem>
            </STextField>
            <STextField
            label="Spouse Name"
            name="spouse_name"
            value={data.spouse_name}
            onChange={handleChange}
            fullWidth
            size="small"
            />
            <STextField
            size="small"
            name="children_count"
            value={data.children_count}
            onChange={handleChange}
            label="Children Count"
            />
            <STextField
            size="small"
            name="qualification"
            value={data.qualification}
            onChange={handleChange}
            label="Qualification"
            />
            <STextField
            size="small"
            name="experience"
            value={data.experience}
            onChange={handleChange}
            label="Experience"
            />
            <STextField
            size="small"
            name="office_door_no"
            value={data.office_door_no}
            onChange={handleChange}
            label="Office Door no"
            />
            <STextField
            size="small"
            name="office_area"
            value={data.office_area}
            onChange={handleChange}
            label="Office Area"
            />
            <STextField
            size="small"
            name="office_district"
            value={data.office_district}
            onChange={handleChange}
            label="Office District"
            /> 
            <STextField
            name="office_state"
            value={data.office_state}
            onChange={handleChange}
            size="small"
            label="Office State"
            />  
            <STextField
            size="small"
            name="office_country"
            value={data.office_country}
            onChange={handleChange}
            label="Office Country"
            />  
            <STextField
            size="small"
            name="office_pincode"
            value={data.office_pincode}
            onChange={handleChange}
            label="Office Pincode"
            />  
            <STextField
            size="small"
            name="emergency_conatact"
            value={data.emergency_contact}
            onChange={handleChange}
            label="Emergency Contact"
            />  
            </Paper>
            <Button variant="contained" color="success" onClick={onSave} sx={{height:'45px',width:'80px'}}>Save</Button>

        </Box>
    );
}

export default StaffForm;