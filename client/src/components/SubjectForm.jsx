import { Box,TextField,Typography,styled,MenuItem,Button } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";

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
        axios.post('http://localhost:5000/api/subject/add',data)
        console.log(data)
    }

    return (
        <Box
        component="form"
        noValidate
        autoComplete="off"
        flex={10} 
        p={2}
        >   
            <Typography variant={'h6'} sx={{color:'blue',fontSize:30,margin:'10px'}}>
                Subject
            </Typography>
            <Box 
            sx={{
            bgcolor: 'background.default',
            display:'flex',
            justifyContent:'space-evenly'
            }}>
            <Card
            sx={{display:'flex',flexDirection:'column',p:3,width:'95%',height:'auto'}}
            >
                <CardContent>

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
                sx={{width:"125px"}}
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
                sx={{width:"135px"}}
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
                sx={{width:"75px"}}
                onChange={handleChange}
                select
                label="Year"
                >
                    <MenuItem value='1'>First</MenuItem>
                    <MenuItem value='2'>Second</MenuItem>
                    <MenuItem value='3'>Third</MenuItem>
                    <MenuItem value='4'>Fourth</MenuItem>
                </STextField>

                <STextField
                size="small"
                name="semester"
                sx={{width:"110px"}}
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
                sx={{width:"95px"}}
                onChange={handleChange}
                select
                label="Staff"
                >
                    <MenuItem value='Staff1'>Staff1</MenuItem>
                    <MenuItem value='Staff2'>Staff2</MenuItem>
                </STextField>
                </CardContent>
            <Button variant="contained" type="submit" onClick={onSave}>Save</Button>
                </Card>
                
            </Box>
            

        </Box>
    );
}

export default SubjectForm;