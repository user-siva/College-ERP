import { Box,TextField,Paper,Typography,styled,MenuItem,Button } from "@mui/material";
import { useState } from "react";

const STextField = styled(TextField)({
    margin:'14px'
})

function SubjectForm() {

    const [data,setData] = useState({
        subject_code:"",
        subject_name:"",
        regulation:"",
        department:"",
        year:"",
        semester:"",
        staff:""
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
            <Paper variant="outlined" elevation={8} 
            sx={{display:'flex',flexDirection:'column',p:3,width:'75%',height:'430px',overflow:'hidden',overflowY:'scroll'}}
            >
            <Typography variant={'h6'} sx={{color:'blue',fontSize:30}}>
                Subject
            </Typography>

            <STextField
            label="Subject Code"
            size="small"
            name="subject_code"
            value={data.subject_code}
            onChange={handleChange}
            fullWidth
            required
            />
            <STextField
            size="small"
            label="Subject Name"    
            name="subject_name"
            value={data.subject_name}
            onChange={handleChange}         
            fullWidth
            />
            <STextField
            size="small"
            name="regulation"
            value={data.regulation}
            onChange={handleChange}
            select
            label="Regulation"
            >
                <MenuItem  value='2017'>2017</MenuItem>
                <MenuItem value='2021'>2021</MenuItem>
            </STextField>
            <STextField
            size="small"
            name="department"
            value={data.department}
            onChange={handleChange}
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
            name="year"
            value={data.year}
            onChange={handleChange}
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
            name="semester"
            value={data.semester}
            onChange={handleChange}
            select
            label="Semester"
            >
                <MenuItem value='Odd'>Odd</MenuItem>
                <MenuItem value='Even'>Even</MenuItem>
            </STextField>
            <STextField
            size="small"
            name="staff"
            value={data.staff}
            onChange={handleChange}
            select
            label="Staff"
            >
                <MenuItem value='Staff1'>Staff1</MenuItem>
                <MenuItem value='Staff2'>Staff2</MenuItem>
            </STextField>
             
            </Paper>
            <Button onClick={onSave} variant="contained" color="success" sx={{height:'45px',width:'80px'}}>Save</Button>

        </Box>
    );
}

export default SubjectForm;