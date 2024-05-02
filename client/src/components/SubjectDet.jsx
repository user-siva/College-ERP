import { Box, Typography, Button } from "@mui/material";
import Filter from "./utils/Filter";
import SubjectList from "./subjectUtils/SubjectList";
import { useState } from "react";
function SubjectDet() {

  const [filterData, setFilterData] = useState({})

  const handleData = (data) => {
    setFilterData(data)
    console.log("data:", data)
  }

  return (
    <Box flex={10} p={2} >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" p={1}>
          Subjects
        </Typography>
        <Button variant="contained" color="success" href='/SubjectForm'>Add Subject</Button>
      </Box>
      <Filter sendData={handleData} />
      <SubjectList filterData={filterData} />
    </Box>
  );
}

export default SubjectDet;