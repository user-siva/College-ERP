import { TextField,styled,Button, Typography } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DynamicSemSection from "./DynamicSemSection";
import DynamicForm from "../utils/DynamicForm";
//import axios from "axios";
const STextField = styled(TextField)({
    margin:'14px'
})

function EditableMarkDetails({markDetails}) {

    const [data,setData] = useState({
        "sem_1_iat_1":"",
        "sem_1_iat_2":"",
        "sem_2_iat_3":"",
        "sem_1_gpa":""
    })
      const [sem,setSem] = useState(1)
      const [semSection,setSemSection] = useState([])

      const handleAddSemSection= () => {
        
        setSemSection((prevFields) => [...prevFields, sem+1]);
        setSem(sem+1)
      };

      const handleCustomInputChange = (field, value) => {
        setData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };

      const handleChange = (e) => {
          const {name,value} = e.target;
          setData((prev)=>{
              return {...prev,[name]:value}
          })
        };

        const [customFields, setCustomFields] = useState([]);  


      const handleAddCustomField = () => {
        const newFieldName = prompt('Enter the name for the custom field:');
        if (newFieldName && !customFields.includes(newFieldName)) {
          setCustomFields((prevFields) => [...prevFields, newFieldName]);
        }
      };

        const onSave = () => {
            markDetails(data)
            console.log("markDetails:",data)
        }


    return (
        <>
            <Card 
            sx={{display:'flex',flexDirection:'column',p:3,width:'95%',marginTop:'10px',height:'auto'}}
            >
            <CardContent>
                <Typography>Semester 1</Typography>

            <STextField
            label="IAT 1 Mark"
            name="sem_1_iat_1"
            size="small"
            value={data?.sem_1_iat_1}
            onChange={handleChange}
            
            />
            <STextField
            label="IAT 2 Mark"
            name="sem_1_iat_2"
            size="small"
            value={data?.sem_1_iat_2}
            onChange={handleChange}
            
            />
            <STextField
            label="IAT 3 Mark"
            name="sem_2_iat_3"
            size="small"
            value={data?.sem_2_iat_3}
            onChange={handleChange}
            
            />
            <STextField
            label="GPA"
            name="gpa"
            size="small"
            value={data?.gpa}
            onChange={handleChange}
            
            />
            <DynamicForm
            customFields={customFields}
            onInputChange={handleCustomInputChange}
            onAddCustomField={handleAddCustomField}
            />
            
            </CardContent>
            <DynamicSemSection 
            semSection={semSection}
            onInputChange={handleCustomInputChange}
            onAddSemSection={handleAddSemSection}
            />
            
            <Button variant="contained" onClick={onSave}>Save</Button>
            </Card>
        </>
    );
}

export default EditableMarkDetails;