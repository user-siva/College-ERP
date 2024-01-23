import { Box ,Typography,Button} from "@mui/material";
import Filter from "./utils/Filter";
import StudentList from "./studentUtils/StudentList";

function StudentDet() {

  return (
    <Box flex={10} p={2} >

    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant="h6" p={1}>
        Students
    </Typography>
    <Button variant="contained" color="success" href='/studentForm'>Add Student</Button>
    </Box>

    <Filter />
    
    <StudentList />

    </Box>
  );

    
}

export default StudentDet;