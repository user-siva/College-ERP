import { Box,Button,Typography } from "@mui/material";
import { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import EditablePersonalDetails from "./EditablePersonalDetails";
import EditableFeesDetails from "./EditableFeesDetails";
import EditableMarkDetails from "./EditableMarkDetails";
import axios from 'axios';


const steps = ['Personal Details', 'Fees & Scholarship Details', 'Exam Details'];

function EditableMergedForm() {

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
      setPersonalData(data)
    }

    const feesDetails = (data) => {
      setFeesData(data)
      handleComplete()
    }

    const markDetails = (data) => {
      setMarkData(data)
    }


    const onSubmit = async (e) => {
      e.preventDefault();
      setActiveStep(0);
      setCompleted({});
    
      try {
        const personalDetailsResponse = await axios.post("http://localhost:5000/api/student/add", personalData);
        console.log("personalDetailsResponse:",personalDetailsResponse)
        const personalDetailsId = personalDetailsResponse.data._id;
        console.log("personalDetailsId:",personalDetailsId)
  

        const feesDetailsResponse = await axios.post("http://localhost:5000/api/fees_details/add", feesData);
        const feesDetailsId = feesDetailsResponse.data._id;
    
        const markDetailsResponse = await axios.post("http://localhost:5000/api/mark_details/add", markData);
        const markDetailsId = markDetailsResponse.data._id;
    
        await axios.put(`http://localhost:5000/api/student/update/${personalDetailsId}`, {
          feesDetails: feesDetailsId,
          markDetails: markDetailsId,
        });
    
        console.log("FORMS SUBMITTED");
      } catch (error) {
        console.error(error);
      }
    };
    

    return (
        <Box sx={{ width: '95%' }}>
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
            <EditablePersonalDetails personalDetails={personalDetails}/> : 
            activeStep===1 ? <EditableFeesDetails feesDetails={feesDetails}/> : 
            activeStep===2 ? <EditableMarkDetails markDetails={markDetails}/> : null}
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
                      ? <Button type="submit" onClick={(e)=>{onSubmit(e)}}>Submit</Button>
                      : <Button  disabled>Submit</Button>}
                 </>
                ))}
            </Box>
          
      </div>
      </Box>
    );
}

export default EditableMergedForm;