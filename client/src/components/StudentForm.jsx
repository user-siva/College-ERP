import { Box} from "@mui/material";
import MergedForm from "./studentUtils/MergedForm";



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
            <MergedForm />
            
            
        </Box>
    );
}

export default StudentForm;