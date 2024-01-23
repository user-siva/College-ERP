import { Box ,Typography,Button} from "@mui/material";
import Filter from "./utils/Filter";
import SubjectList from "./subjectUtils/SubjectList";

function SubjectDet() {
  return (
    <Box flex={10} p={2} >
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant="h6" p={1}>
        Subjects
    </Typography>
    <Button variant="contained" color="success" href='/SubjectForm'>Add Subject</Button>
    </Box>
    <Filter />
    <SubjectList />
    </Box>
  );
}

export default SubjectDet;