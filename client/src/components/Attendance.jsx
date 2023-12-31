import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Button } from '@mui/material';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



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
  const departments = [
    {
      value: 'CSE',
      label: 'CSE',
    },
    {
      value: 'ECE',
      label: 'ECE',
    },
    {
      value: 'EEE',
      label: 'EEE',
    },
    {
      value: 'Mechanical',
      label: 'MECH',
    },
    {
      value: 'Civil',
      label: 'Civil',
    },
  ];

  const year = [
    {
      value: '1 year',
      label: '1 year',
    },
    {
      value: '2 year',
      label: '2 year',
    },
    {
      value: '3 year',
      label: '3 year',
    },
    {
      value: '4 year',
      label: '4 year',
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper' }} flex={10} p={2}>
      
      <Box component="form" sx={{display:'flex',justifyContent:'flex-start',margin:1}}>
      <TextField
          id="outlined-select-department"
          select
          label="Department"
          defaultValue="CSE"
          helperText="Please select the department"
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-year"
          select
          label="Year"
          defaultValue="1 year"
          helperText="Please select the year"
          sx={{marginLeft:"10px"}}
        >
          {year.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" sx={{height:'45px',marginLeft:'10px'}}>Filter</Button>
      </Box>
   
      
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