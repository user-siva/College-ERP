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
import { useState } from 'react';


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
  const [flag,setFlag]  = useState("absent")
  const [flagLabel,setFlagLabel] = useState("Ab")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFlag = () => {
    if (flag==='absent') {
      setFlag("od")
      setFlagLabel("OD")
    }
    else{
      setFlag("absent")
      setFlagLabel("Ab")
    }
  }

  return (
    <Box sx={{ bgcolor: 'background.paper' }} flex={10} p={2}>
      
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Day Wise" {...a11yProps(0)} />
          <Tab label="Period Wise" {...a11yProps(1)} />
          
        </Tabs>
      </Box>

      <Box sx={{height:'480px',overflow:'hidden',overflowY:'scroll'}} >

      {/* First Tab */}
      <CustomTabPanel value={value} index={0}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
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
        Gender<br/>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue='present'
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="present" control={<Radio size='small'/>} label="Pr" />
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

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
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

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
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

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
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

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
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

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
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

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
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

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
            <FormControlLabel value={flag} control={<Radio  size='small'/>} label={flagLabel} onDoubleClick={handleFlag}/>

          </RadioGroup>
        </FormControl> 

      </CustomTabPanel>
    
    </Box>
    </Box>
  );
}

export default Attendance;