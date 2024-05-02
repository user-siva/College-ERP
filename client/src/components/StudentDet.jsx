import { Box, Typography, Button } from "@mui/material";
import Filter from "./utils/Filter";
import StudentList from "./studentUtils/StudentList";
import { useState } from "react";

function StudentDet() {

  const [filterData, setFilterData] = useState({})
  // const dept_year = [['CSE', 1], ['CSE', 2], ['CSE', 3], ['CSE', 4], ["ECE", 1], ["ECE", 2], ["ECE", 3], ["ECE", 4],
  // ["EEE", 1], ["EEE", 2], ["EEE", 3], ["EEE", 4], ["MECH", 1], ["MECH", 2], ["MECH", 3], ["MECH", 4],
  // ["Civil", 1], ["Civil", 2], ["Civil", 3], ["Civil", 4],]
  const [dept_year, setDeptYear] = useState([['CSE', 4], ['CSE', 3], ['MECH', 4]])

  const handleData = (data) => {
    setFilterData(data)
    console.log("data:", data)
  }

  return (
    <Box flex={10} p={2} >

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" p={1}>
          Students
        </Typography>
        <Button variant="contained" color="success" href='/studentForm'>Add Student</Button>
      </Box>

      <Filter sendData={handleData} />

      <StudentList deptYear={dept_year} filterData={filterData} />

    </Box>
  );


}

export default StudentDet;