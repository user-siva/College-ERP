import { Box} from '@mui/material';
import CustomTabPanel from './utils/CustomTabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonalDetailsView from './studentUtils/PersonalDetailsView';
import { useState } from 'react';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function StudentProfile() {
    const [value, setValue] = useState(0);
    const [feesData,setFeesData] = useState({})
    const [markData,setMarkData] = useState({})
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleFees = (data) => {
      setFeesData(data)
      console.log("feesData:",feesData)
    }

    const handleMark = (data) => {
      setMarkData(data)
      console.log("markData:",markData)
    }
      //let data_ = Object.entries(data)

    return (
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Personal Details" {...a11yProps(0)} />
                <Tab label="Fees Details" {...a11yProps(1)} />
                <Tab label="Mark Details" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <PersonalDetailsView onFees={handleFees} onMark={handleMark}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
              
              

    );
}

export default StudentProfile;