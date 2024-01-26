import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CustomTabPanel from './utils/CustomTabPanel';
import { useState } from 'react';
import Filter from './utils/Filter';



function Attendance() {
  
  const [value, setValue] = useState(0);
  const [day,setDay] = useState({})
  const [choice,setChoice] = useState(["absent","absent","absent","absent","absent","absent","absent","absent","absent"])
  const [choiceLabel,setChoiceLabel] = useState(["Ab","Ab","Ab","Ab","Ab","Ab","Ab","Ab"])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChoice = (val) => {
   if(choice[val]==="absent")
   {
    const choices = [...choice]
    choices[val] = "od"
    setChoice(choices)
    const choicesLab = [...choiceLabel]
    choicesLab[val] = "OD"
    setChoiceLabel(choicesLab)
   }
   else{
    const choices = [...choice]
    choices[val] = "absent"
    setChoice(choices)
    const choicesLab = [...choiceLabel]
    choicesLab[val] = "Ab"
    setChoiceLabel(choicesLab)
   }
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ bgcolor: 'background.paper' }} flex={10} p={2}>
      <Filter />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Day Wise" {...a11yProps(0)} />
          <Tab label="Period Wise" {...a11yProps(1)} />
          
        </Tabs>
      </Box>

      <Box sx={{height:'480px',overflow:'hidden',overflowY:'scroll'}} >

      {/* First Tab */}
      <CustomTabPanel value={value} index={0}>
      <Typography variant='p' component="span" id="stuName1" sx={{color:'gray'}}>Siva</Typography><br/>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio />} label="Present" />
            <FormControlLabel value="absent" control={<Radio />} label="Absent"/>
            <FormControlLabel value="od" control={<Radio size='small'/>} label="OD" />
            
          </RadioGroup>
        </FormControl><br/>    
      </CustomTabPanel>

      {/* Second Tab */}
      <CustomTabPanel value={value} index={1}>
        <Typography variant='p' component="span" id="stuName2" sx={{color:'gray'}}>Siva</Typography><br/>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[0]} 
            control={<Radio  size='small'/>}
            label={choiceLabel[0]} 
            onDoubleClick={()=>handleChoice(0)}/>
          </RadioGroup>
        </FormControl> 
        <FormControl>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
           <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[1]} control={<Radio  size='small'/>} label={choiceLabel[1]} onDoubleClick={()=>(handleChoice(1))}/>

          </RadioGroup>
        </FormControl> 

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[2]} control={<Radio  size='small'/>} label={choiceLabel[2]} onDoubleClick={()=>(handleChoice(2))}/>

          </RadioGroup>
        </FormControl> 

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[3]} control={<Radio  size='small'/>} label={choiceLabel[3]} onDoubleClick={()=>(handleChoice(3))}/>

          </RadioGroup>
        </FormControl> 

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[4]} control={<Radio  size='small'/>} label={choiceLabel[4]} onDoubleClick={()=>(handleChoice(4))}/>

          </RadioGroup>
        </FormControl> 

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[5]}control={<Radio  size='small'/>} label={choiceLabel[5]} onDoubleClick={()=>(handleChoice(5))}/>

          </RadioGroup>
        </FormControl> 

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[6]} control={<Radio  size='small'/>} label={choiceLabel[6]} onDoubleClick={()=>(handleChoice(6))}/>

          </RadioGroup>
        </FormControl> 

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel 
            value={choice[7]} control={<Radio  size='small'/>} label={choiceLabel[7]} onDoubleClick={()=>(handleChoice(7))}/>

          </RadioGroup>
        </FormControl> 

      </CustomTabPanel>
    
    </Box>
    </Box>
  );
}

export default Attendance;