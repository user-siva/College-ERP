import { Box, Stack,Divider } from '@mui/material';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar'
import StudentForm from '../components/StudentForm'
//import StaffDet from '../components/StaffDet';
//import TimeTable from '../components/TimeTable'

function Home() {
    return (
        <Box>
            <TopBar />
            <Stack direction='row' spacing={2} >
                <SideBar />
                <Divider orientation="vertical" flexItem />
                <StudentForm />
            </Stack>
        </Box>
    );
}

export default Home;