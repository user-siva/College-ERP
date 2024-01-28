import { Box} from '@mui/material';
import CustomTabPanel from './utils/CustomTabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonalDetailsView from './studentUtils/PersonalDetailsView';
import FeesDetailsView from './studentUtils/FeesDetailsView'
import MarkDetailsView from './studentUtils/MarkDetailsView'
import {useQuery} from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import ShadowLoading from "./utils/ShadowLoading"
import { useEffect, useState } from 'react';
import axios from "axios"

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
        const { Id } = useParams();

        // Fetch the personalDetails data using the Id
        const { isLoading: isLoadingPersonal, error: errorPersonal, data: personalData } = useQuery({
          queryKey: ['personalData'],
          queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/student/${Id}`)
            return res.data
          },
        })

        
        const { isLoading: isLoadingFees, error: errorFees, data: feesData_,isFetched:isFeesFetched } = useQuery({
          queryKey: ['feesData'],
          queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/fees_details/${personalData.feesDetails}`)
            return res.data
          },
          enabled: !!personalData 
        })

        
        const { isLoading: isLoadingMark, error: errorMark, data: markData_,isFetched:isMarkFetched } = useQuery({
          queryKey: ['markData'],
          queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/mark_details/${personalData.markDetails}`)
            return res.data
          },
          enabled: !!personalData 
        })

        useEffect(() => {
          if (isFeesFetched) {
            setFeesData(feesData_);
          }
        }, [isFeesFetched, feesData_]);
        
        useEffect(() => {
          if (isMarkFetched) {
            setMarkData(markData_);
          }
        }, [isMarkFetched, markData_]);

      
        if (isLoadingPersonal || isLoadingFees || isLoadingMark) {
          return (
            <ShadowLoading />
          )
        }

        if (errorPersonal || errorFees || errorMark) {
          console.log(errorPersonal, errorFees, errorMark)
          return 'An error has occurred: ' + errorPersonal + ' ' + errorFees + ' ' + errorMark
        }

      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };

      //let data_ = Object.entries(data)

    return (
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Personal Details" {...a11yProps(0)} />
                <Tab label="Fees & Scholarship Details" {...a11yProps(1)} />
                <Tab label="Mark Details" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <PersonalDetailsView data={personalData}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FeesDetailsView data={feesData}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <MarkDetailsView data={markData}/>
            </CustomTabPanel>
          </Box>
              
              

    );
}

export default StudentProfile;