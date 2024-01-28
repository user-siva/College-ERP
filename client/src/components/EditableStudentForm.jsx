import { Box} from "@mui/material";
import EditableMergedForm from "./studentUtils/EditableMergedForm"

function EditableStudentForm() {

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
            <EditableMergedForm />
            
            
        </Box>
    );
}

export default EditableStudentForm;