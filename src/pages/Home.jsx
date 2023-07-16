import { Box, Stack,Divider } from '@mui/material';
import {Routes,Route} from 'react-router-dom'
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar'
import StudentDet from '../components/StudentDet'
import StaffDet from '../components/StaffDet'
import SubjectDet from '../components/SubjectDet'
import StudentForm from '../components/StudentForm'
import StaffForm from '../components/StaffForm'
import TimeTable from '../components/TimeTable'
import SubjectForm from '../components/SubjectForm';

function Home() {
    return (
        <Box sx={{height:'100vh'}}>
            <TopBar />
            <Stack direction='row' >
                <SideBar />
                <Divider orientation="vertical" flexItem />
                <Routes>
                    <Route path='/' element={<StudentDet />} />
                    <Route path='/studentForm' element={<StudentForm />} />
                    <Route path='/staffDetails' element={<StaffDet />} />
                    <Route path='/staffForm' element={<StaffForm />} />
                    <Route path='/SubjectDet' element={<SubjectDet />} />
                    <Route path='/SubjectForm' element={<SubjectForm />} />
                    <Route path='/TimeTable' element={<TimeTable />} />       

                </Routes>
            </Stack>
        </Box>
    );
}

export default Home;