import { TextField,styled,Button } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DynamicForm from "../utils/DynamicForm";

const STextField = styled(TextField)({
    margin:'14px'
})

function FeesDetails({feesDetails}) {

    const [data,setData] = useState({
        admission_fees:"",
        tution_fees:"",
        bus_fees:"",
        hostel_fees:"",
        previous_year_balance:"",
        total_fees:"",
        fgg:"",
        pmss:"",
        seven_point_five:"",
        ket:"",
    })

    const [customFields, setCustomFields] = useState([]);  

    const handleChange = (e) => {
      const { name, value } = e.target;
    
      // Convert to numbers for specific fields
      const newValue = Number(value) 
  
      setData((prev) => ({ ...prev, [name]: newValue }));
      };

    const handleAddCustomField = () => {
        const newFieldName = prompt('Enter the name for the custom field:');
        if (newFieldName && !customFields.includes(newFieldName)) {
          setCustomFields((prevFields) => [...prevFields, newFieldName]);
        }
      };

    const handleCustomInputChange = (field, value) => {
        setData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };

    const onSave = () => {
        feesDetails(data)
    }



    return (
        <>
            <Card 
            sx={{display:'flex',flexDirection:'column',p:3,width:'95%',marginTop:'10px',height:'auto'}}
            >
            <CardContent>
            <STextField
            label="Admission Fees"
            name="admission_fees"
            type="number"
            size="small"
            value={data.admission_fees}
            onChange={handleChange}
            required
            />
            <STextField
            label="Tution Fees"
            name="tution_fees"
            type="number"
            size="small"
            value={data.tution_fees}
            onChange={handleChange}
            required
            />
            <STextField
            label="Bus Fees"
            name="bus_fees"
            type="number"
            size="small"
            value={data.bus_fees}
            onChange={handleChange}
            required
            />
            <STextField
            label="Hostel Fees"
            name="hostel_fees"
            type="number"
            size="small"
            value={data.hostel_fees}
            onChange={handleChange}
            required
            />
            <STextField
            label="Previos Year Fees"
            name="previous_year_balance"
            type="number"
            size="small"
            value={data.previous_year_balance}
            onChange={handleChange}
            required
            />
            <STextField
            label="Total Fees"
            name="total_fees"
            type="number"
            size="small"
            value={data.total_fees}
            onChange={handleChange}
            required
            />
            <STextField
            label="FGG Scholarhip"
            name="fgg"
            type="number"
            size="small"
            value={data.fgg}
            onChange={handleChange}
            required
            />
            <STextField
            label="PMSS Scholarhip"
            name="pmss"
            type="number"
            size="small"
            value={data.pmss}
            onChange={handleChange}
            required
            />
            <STextField
            label="7.5% Govt Quota"
            name="seven_point_five"
            type="number"
            size="small"
            value={data.seven_point_five}
            onChange={handleChange}
            required
            />
            <STextField
            label="KET Scholarship"
            name="ket"
            type="number"
            size="small"
            value={data.ket}
            onChange={handleChange}
            required
            />
            <DynamicForm
            customFields={customFields}
            onInputChange={handleCustomInputChange}
            onAddCustomField={handleAddCustomField}
            />
            </CardContent>
            <Button variant="contained" onClick={onSave}>Save</Button>
            </Card>
        </>
    );
}

export default FeesDetails;