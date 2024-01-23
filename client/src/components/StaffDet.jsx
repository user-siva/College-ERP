import { Box ,Typography,Button} from "@mui/material";
import Filter from "./utils/Filter";
import StaffList from "./staffUtils/StaffList";

function StaffDet() {
    

  return (
    <Box flex={10} p={2} >
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant="h6" p={1}>
        Staffs
    </Typography>
    <Button variant="contained" color="success" href='/staffForm'>Add Staff</Button>
    </Box>
    <Filter />
    <StaffList />
    </Box>
  );
}

export default StaffDet;