import { Box,TextField,Paper,Typography,styled,MenuItem,Button } from "@mui/material";
import dayjs from 'dayjs';
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import PersonalDetails from "./studentUtils/PersonalDetails";

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


const steps = ['Personal Details', 'Fees Details', 'Exam Details'];

function StudentForm() {

    const [data,setData] = useState({
        name:"",
        admission_no:"",
        admission_date:dayjs(),
        batch:"",
        register_no:"",
        roll_no:"",
        age:"",
        dob:dayjs(),
        gender:"",
        department:"",
        year:"",
        blood_group:"",
        phone:"",
        email:"",
        aadhaar_no:"",
        father_name:"",
        father_phone_no:"",
        father_occupation:"",
        mother_name:"",
        mother_phone_no:"",
        mother_occupation:"",
        annual_income:"",
        nationality:"",
        religion:"",
        student_category:"",
        door_no:"",
        street:"",
        district:"",
        state:"",
        country:"",
        pincode:"",
        transportation:"",
        bus_route_no:"",
        regular_boarding_point:"",
        regular_dropping_point:"",
        gaurdian_name:"",
        gaurdian_is:"",
        gaurdian_mobile:"",
        gaurdian_address:"",
        gaurdian_2_name:"",
        gaurdian_2_mobile:"",
        gaurdian_2_address:"",
        emergency_contact:""
})

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
    return steps.length;
    };

    const completedSteps = () => {
    return Object.keys(completed).length;
    };

    const isLastStep = () => {
    return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
    };

    const handleNext = () => {
    const newActiveStep =
        isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
    setActiveStep(step);
    };

    const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    };

    const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    };

    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };

    const onSave = () => {
        console.log(data)
    console.log("active step:",activeStep)

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
        <Box sx={{ width: '80%' }}>
            <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            {activeStep===0 ? <PersonalDetails/> : activeStep===1 ? "Step 1" : activeStep===2 ? "Step 2" : null}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
      </Box>
            <Stack spacing={2}>
            <Button component="label" variant="contained" onClick={onSave} color="success" >Save</Button>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
            </Button>
            </Stack>
            
        </Box>
    );
}

export default StudentForm;