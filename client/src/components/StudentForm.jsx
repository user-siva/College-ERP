import { Box,TextField,Paper,Typography,styled,MenuItem,Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const STextField = styled(TextField)({
    margin:'14px'
})

function StudentForm() {
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
            size="small"
            fullWidth
            required
            />
            <STextField
            size="small"
            label="Admission Number"             
            fullWidth
            />
            <DatePicker size='small' label={'Admission Date'} sx={{margin:'14px'}}/>
            <STextField
            size="small"
            label="Batch"
            fullWidth
            />
            <STextField
            size="small"
            label="Register No"            
            fullWidth
            />
            <STextField
            size="small"
            label="Roll No"             
            fullWidth
            />
            <STextField
            size="small"
            label="Age"
            fullWidth
            />
            <DatePicker size='small' label={'Admission Date'} sx={{margin:'14px'}}/>
            <STextField
            size="small"
            select
            label="Gender"
            >
                <MenuItem value='Male' >Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
            </STextField>
            <STextField
            size="small"
            select
            label="Department"
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
            >
                <MenuItem value='First'>First</MenuItem>
                <MenuItem value='Second'>Second</MenuItem>
                <MenuItem value='Third'>Third</MenuItem>
                <MenuItem value='Fourth'>Fourth</MenuItem>
            </STextField>
            
            <STextField
            label="Blood Group"        
            fullWidth
            size="small"
            />
            <STextField
            label="Phone"
            fullWidth
            size="small"
            />
            <STextField
            label="Email"
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
            label="Father Occupation"
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
            label="Mother Occupation"
            fullWidth
            size="small"
            />
            <STextField
            label="Annual Income"
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
            size="small"
            select
            label="Student Category"
            >
                <MenuItem value='BC'>BC</MenuItem>
                <MenuItem value='MBC'>MBC</MenuItem>
                <MenuItem value='OC'>OC</MenuItem>
                <MenuItem value='SC/ST'>SC/ST</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
            </STextField>
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
            label="Gaurdian Name"
            fullWidth
            size="small"
            />
            <STextField
            size="small"
            label="Gaurdian Is"
            />
            <STextField
            size="small"
            label="Gaurdian Mobile"
            />
            <STextField
            size="small"
            label="Gaurdian Address"
            />
            <STextField
            size="small"
            label="Gaurdian 2 Name"
            />
            <STextField
            size="small"
            label="Gaurdian 2 Mobile"
            />
            <STextField
            size="small"
            label="Gaurdian 2 Address"
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

export default StudentForm;