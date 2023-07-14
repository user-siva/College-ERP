import { Box, Stack } from '@mui/material';
import Main from '../components/Main';
import TopBar from '../components/TopBar';

function Home() {
    return (
        <Box>
            <TopBar />
            <Stack direction='row' spacing={2} >
                <Main />
            </Stack>
        </Box>
    );
}

export default Home;