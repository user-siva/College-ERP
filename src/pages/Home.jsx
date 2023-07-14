import { Box, Stack,Divider } from '@mui/material';
//import Main from '../components/Main';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar'
import TimeTable from '../components/TimeTable'

function Home() {
    return (
        <Box>
            <TopBar />
            <Stack direction='row' spacing={2} >
                <SideBar />
                <Divider orientation="vertical" flexItem />
                <TimeTable />
            </Stack>
        </Box>
    );
}

export default Home;