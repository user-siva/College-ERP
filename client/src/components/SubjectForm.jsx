import { Box,TextField,Paper,Typography,styled,MenuItem,Button } from "@mui/material";
const STextField = styled(TextField)({
    margin:'14px'
})

function SubjectForm() {
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
            sx={{display:'flex',flexDirection:'column',p:3,width:'75%',height:'430px',overflow:'hidden',overflowY:'scroll'}}
            >
            <Typography variant={'h6'} sx={{color:'blue',fontSize:30}}>
                Subject
            </Typography>
            <STextField
            label="Subject Code"
            size="small"
            fullWidth
            required
            />
            <STextField
            size="small"
            label="Subject Name"             
            fullWidth
            />
            <STextField
            size="small"
            select
            label="Regulation"
            >
                <MenuItem  value='2017'>2017</MenuItem>
                <MenuItem value='2021'>2021</MenuItem>
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
            size="small"
            select
            label="Semester"
            >
                <MenuItem value='Odd'>Odd</MenuItem>
                <MenuItem value='Even'>Even</MenuItem>
            </STextField>
            <STextField
            size="small"
            select
            label="Staff"
            >
                <MenuItem value='Staff1'>Staff1</MenuItem>
                <MenuItem value='Staff2'>Staff2</MenuItem>
            </STextField>
             
            </Paper>
            <Button variant="contained" color="success" sx={{height:'45px',width:'80px'}}>Save</Button>

        </Box>
    );
}

export default SubjectForm;