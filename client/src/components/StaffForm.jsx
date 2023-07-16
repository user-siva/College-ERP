import { Box,TextField,Paper,Typography,styled,MenuItem,Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const STextField = styled(TextField)({
    margin:'14px'
})

function StaffForm() {
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
                Staff Form
            </Typography>
            <STextField
            label="Name"
            size="small"
            fullWidth
            required
            />
            <STextField
            size="small"
            label="Employee ID"             
            fullWidth
            />
            <STextField
            size="small"
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
            <DatePicker size='small' label={'Date of Birth'} sx={{margin:'14px'}}/>
            <STextField
            size="small"
            label="Father Name"
            fullWidth
            />
            <STextField
            size="small"
            label="Mother Name"            
            fullWidth
            />
            <STextField
            size="small"
            label="Phone"             
            fullWidth
            />
            <STextField
            size="small"
            label="Email"
            fullWidth
            />
            <STextField
            size="small"
            label="Age"
            fullWidth
            />
            <DatePicker size='small' label={'Date of Joining'} sx={{margin:'14px'}}/>
            <STextField
            size="small"
            select
            label="Gender"
            >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
            </STextField>
            
            <STextField
            label="Blood Group"        
            fullWidth
            size="small"
            />
            <STextField
            label="Home Contact No"
            fullWidth
            size="small"
            />
            <STextField
            label="Aadhaar No"
            fullWidth
            size="small"
            />
            <STextField
            label="Father Name"
            fullWidth
            size="small"
            />
            <STextField
            label="Father Phone No"
            fullWidth
            size="small"
            />
            
            <STextField
            label="Mother Name"
            fullWidth
            size="small"
            />
            <STextField
            label="Mother Phone No"
            fullWidth
            size="small"
            />
            <STextField
            label="Nationality"
            fullWidth
            size="small"
            />
            <STextField
            label="Religion"
            fullWidth
            size="small"
            />
            <STextField
            label="Door No"
            fullWidth
            size="small"
            />
             <STextField
            label="Street"
            fullWidth
            size="small"
            />
             <STextField
            label="District"
            fullWidth
            size="small"
            />
             <STextField
            label="State"
            fullWidth
            size="small"
            />
             <STextField
            label="Country"
            fullWidth
            size="small"
            />
             <STextField
            label="Pincode"
            fullWidth
            size="small"
            />
             <STextField
            size="small"
            select
            label="Mode Of Transportation"
            >
                <MenuItem value='College Bus'>College Bus</MenuItem>
                <MenuItem value='Own Vehicle'>Own Vehicle</MenuItem>
                <MenuItem value='By Walk'>By Walk</MenuItem>
            </STextField>
            <STextField
            label="Bus Route No"
            fullWidth
            size="small"
            />
             <STextField
            label="Regular Boarding Point"
            fullWidth
            size="small"
            />
             <STextField
            label="Regular Dropping Point"
            fullWidth
            size="small"
            />
            <STextField
            size="small"
            select
            label="Marital Status"
            >
                <MenuItem value='Single'>Single</MenuItem>
                <MenuItem value='Married'> Married</MenuItem>
            </STextField>
            <STextField
            label="Spouse Name"
            fullWidth
            size="small"
            />
            <STextField
            size="small"
            label="Children Count"
            />
            <STextField
            size="small"
            label="Qualification"
            />
            <STextField
            size="small"
            label="Experience"
            />
            <STextField
            size="small"
            label="Office Door no"
            />
            <STextField
            size="small"
            label="Office Area"
            />
            <STextField
            size="small"
            label="Office District"
            /> 
            <STextField
            size="small"
            label="Office State"
            />  
            <STextField
            size="small"
            label="Office Country"
            />  
            <STextField
            size="small"
            label="Office Pincode"
            />  
            <STextField
            size="small"
            label="Emergency Contact"
            />  
            </Paper>
            <Button variant="contained" color="success" sx={{height:'45px',width:'80px'}}>Save</Button>

        </Box>
    );
}

export default StaffForm;