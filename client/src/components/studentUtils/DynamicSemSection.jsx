import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { CardContent,Typography } from '@mui/material';

const STextField = styled(TextField)({
    margin:'14px'
})

function DynamicSemSection({ semSection, onInputChange, onAddSemSection }) {
    return (
            <>         
                    {semSection.map((section) => (
                    <CardContent>
                    
                    <Typography>Semester {section}</Typography>
                    
                    
                    <STextField
                    label="IAT 1 Mark"
                    name={`sem_${section}_iat_1`}
                    size="small"
                    onChange={(e) => onInputChange(`sem_${section}_iat_1`, e.target.value)}
                    
                    />
                    <STextField
                    label="IAT 2 Mark"
                    name={`sem_${section}_iat_2`}
                    size="small"
                    onChange={(e) => onInputChange(`sem_${section}_iat_2`, e.target.value)}
                    
                    />
                    <STextField
                    label="IAT 3 Mark"
                    name={`sem_${section}_iat_3`}
                    size="small"
                    onChange={(e) => onInputChange(`sem_${section}_iat_3`, e.target.value)}
                    
                    />
                    <STextField
                    label="GPA"
                    name={`sem_${section}_gpa`}
                    size="small"
                    onChange={(e) => onInputChange(`sem_${section}_gpa`, e.target.value)}
                    
                    />


                    </CardContent>
                    ))}
                    <Button variant="outlined" sx={{marginTop:'14px',marginBottom:'14px'}} onClick={onAddSemSection}>
                        Add Section
                    </Button>
            </>
    );
}

export default DynamicSemSection;