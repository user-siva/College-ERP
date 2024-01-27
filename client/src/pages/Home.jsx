import { Box,Divider } from '@mui/material';
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
import Attendance from '../components/Attendance';
import StudentProfile from '../components/StudentProfile';
import StaffProfile from '../components/StaffProfile';
function Home() {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
  <TopBar />

  <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
    {/* Fixed Sidebar */}
    <Box sx={{ flex: '0 0 250px', overflowY: 'auto', zIndex: 1, position: 'fixed', top: 64, bottom: 0 }}>
      <SideBar />
    </Box>

    {/* Divider */}
    <Divider orientation="vertical" flexItem />

    {/* Scrollable Main Component */}
    <Box sx={{ flex: 1, overflowY: 'auto', padding: '20px', marginLeft: '200px', }}>
      <Routes>
      <Route path='/' element={<StudentDet />} />
              <Route path='/studentForm' element={<StudentForm />} />
              <Route path='/staffDetails' element={<StaffDet />} />
              <Route path='/staffForm' element={<StaffForm />} />
              <Route path='/SubjectDet' element={<SubjectDet />} />
              <Route path='/SubjectForm' element={<SubjectForm />} />
              <Route path='/TimeTable' element={<TimeTable />} />       
              <Route path='/Attendance' element={<Attendance />} />    
              <Route path='/StudentProfile/:Id' element={<StudentProfile />} />    
              <Route path='/staffDetails/StaffProfile/:Id' element={<StaffProfile />} />    
      </Routes>
    </Box>
  </Box>
</Box>

      
    );
}

export default Home;