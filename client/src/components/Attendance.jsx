import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import Filter from './utils/Filter';
import { Link } from 'react-router-dom';

function Attendance() {

  const [dayWise, setDayWise] = useState([]);
  const [filterData, setFilterData] = useState({})
  const [studentData, setStudentData] = useState([])
  const [date, setDate] = useState(new Date())

  const handleDayWise = (event, index, choice) => {
    event.preventDefault();
    setDayWise(prevInputValues => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = choice;
      return newInputValues;
    });
  }

  useEffect(() => {

    console.log("dayWise:", dayWise);
  }, [dayWise]);

  useEffect(() => {

    console.log("date:", date);
  }, [date]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(`http://localhost:5000/api/student/filter_students`, filterData);
        setStudentData(res.data)
        setDayWise(new Array(res.data.length).fill('present'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [filterData]);

  const onSave = async () => {
    const attendanceData = {
      department: filterData.department,
      year: filterData.year,
      semester: filterData.semester,
      date: date,
    };

    attendanceData['attendance'] = studentData.map((student, index) => {
      return {
        name: student.name,
        register_no: student.register_no,
        status: dayWise[index]
      }
    })

    try {
      const res = await axios.post(`http://localhost:5000/api/studentAttendance/add`, attendanceData)
    }
    catch (err) {
      console.log(err)
    }

    console.log(attendanceData);
  }

  const handleFilterData = (data) => {
    setFilterData(data)
    console.log("data:", data)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <Box sx={{ bgcolor: 'background.paper' }} flex={10} p={2}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Filter sendData={handleFilterData} />
        <TextField
          size='small'
          type='date'
          label='Date'
          value={date}
          onChange={(e) => handleDateChange(e)}
          name='atendance_date'
          sx={{ margin: '14px' }} />
        <Link to={'/AttendanceView'} >
          <Button variant="contained" color="success" sx={{ height: '50px', width: '110px', padding: 3, marginTop: '5px' }}>View Attendance</Button>

        </Link>
      </Box>

      <Box sx={{ height: '480px', overflow: 'hidden', marginTop: 5, marginLeft: 3, overflowY: 'scroll' }}>

        {studentData && (
          studentData?.map((student, index) => (
            <div key={index}>
              <Typography variant='p' component="span" id={`stuName${index}`} sx={{ color: 'gray' }}>{student.name}</Typography><br />
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby={`demo-row-radio-buttons-group-label-${index}`}
                  defaultValue='present'
                  name={`row-radio-buttons-group-${index}`}
                  value={dayWise[index]}
                  onChange={(event) => handleDayWise(event, index, event.target.value)}
                >
                  <FormControlLabel value="present" control={<Radio />} label="Present" />
                  <FormControlLabel value="absent" control={<Radio />} label="Absent" />
                  <FormControlLabel value="od" control={<Radio size='small' />} label="OD" />
                </RadioGroup>
              </FormControl><br />
            </div>
          ))
        )

        }

        <Button variant="contained" color="success" onClick={onSave} sx={{ height: '45px', width: '80px', marginTop: '5px' }}>Save</Button>


      </Box>
    </Box>
  );
}

export default Attendance;
