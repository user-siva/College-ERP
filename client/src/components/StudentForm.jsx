import { Box,styled,Button,Typography } from "@mui/material";
import { useState,useEffect } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import PersonalDetails from "./studentUtils/PersonalDetails";
import FeesDetails from "./studentUtils/FeesDetails";
import ExamDetails from "./studentUtils/ExamDetails";
import axios from 'axios';

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


const steps = ['Personal Details', 'Fees & Scholarship Details', 'Exam Details'];

function StudentForm() {

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [personalData,setPersonalData] = useState({});
    const [feesData,setFeesData] = useState({})
    const [markData,setMarkData] = useState({})

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

    const personalDetails = (data) => {
      handleComplete()
      //axios.post('http://localhost:5000/api/student/add',data)
      setPersonalData(data)
    }

    useEffect(() => {
      console.log("personalData:", personalData);
      console.log("Success!")
    }, [personalData]);

    const feesDetails = (data) => {
      setFeesData(data)
      handleComplete()
    }

    useEffect(() => {
      console.log("feesData:", feesData);
      console.log("Success!")
    }, [feesData]);

    const markDetails = (data) => {
      setMarkData(data)
    }

    useEffect(() => {
      console.log("markData:", markData);
      console.log("Success!")
    }, [markData]);

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
        <Box sx={{ width: '85%' }}>
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
        
            {activeStep===0 ? 
            <PersonalDetails personalDetails={personalDetails}/> : 
            activeStep===1 ? <FeesDetails feesDetails={feesDetails}/> : 
            activeStep===2 ? <ExamDetails markDetails={markDetails}/> : null}
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
              {!isLastStep() ?
               <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button> : ''}
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <>
                    {completedSteps() === totalSteps() - 1
                      ? <Button onClick={handleComplete}>Finish</Button>
                      : <Button  disabled>Finish</Button>}
                 </>
                ))}
            </Box>
          
      </div>
      </Box>
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

export default StudentForm;