import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import Filter from "./utils/Filter";
import StaffList from "./staffUtils/StaffList";

function StaffDet() {
  const [filterData, setFilterData] = useState({})

  const handleData = (data) => {
    setFilterData(data)
    console.log("data:", data)
  }

  return (
    <Box flex={10} p={2} >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" p={1}>
          Staffs
        </Typography>
        <Button variant="contained" color="success" href='/staffForm'>Add Staff</Button>
      </Box>
      <Filter sendData={handleData} />
      <StaffList filterData={filterData} />
    </Box>
  );
}

export default StaffDet;