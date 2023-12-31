import { Box,TextField,Paper,Typography,styled,MenuItem,Button,Stack } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

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
            <Stack spacing={2}>
            <Button component="label" variant="contained" color="success" >Save</Button>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
            </Button>
            </Stack>

        </Box>
    );
}

export default SubjectForm;