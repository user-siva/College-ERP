import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const STextField = styled(TextField)({
    margin:'14px'
})

function DynamicForm({ customFields, onInputChange, onAddCustomField }) {
    return (
        <>         
                {customFields.map((fieldName) => (
                <STextField
                    size="small"
                    name={fieldName}
                    key={fieldName}
                    label={fieldName}
                    onChange={(e) => onInputChange(fieldName, e.target.value)}
                />
                ))}

                <Button variant="outlined" sx={{marginTop:'14px'}} onClick={onAddCustomField}>
                    Add Field
                </Button>
            
        </>
    );
}

export default DynamicForm;