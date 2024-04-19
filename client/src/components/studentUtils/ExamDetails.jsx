import { TextField,styled,Button, Typography } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import DynamicSemSection from "./DynamicSemSection";
//import DynamicForm from "../utils/DynamicForm";
//import axios from "axios";

function ExamDetails({markDetails,subjectDetails}) {

    const [data,setData] = useState({
        "sem_1_iat_1":"",
        "sem_1_iat_2":"",
        "sem_2_iat_3":"",
        "sem_1_gpa":""
    })

    const exams = ['IAT 1','IAT 2','IAT 3','Semester']

    console.log("subjectDetails:",subjectDetails)

      const [years,setYears] = useState([1,2,3,4])
      const [dept,setDept] = useState(['CSE','ECE','MECH','Civil','EEE'])
      const [sems,setSems] = useState([[1,2],[3,4],[5,6],[7,8]])

      const handleChange = (e) => {
          const {name,value} = e.target;
          setData((prev)=>{
              return {...prev,[name]:value}
          })
        };

        const onSave = () => {
            markDetails(data)
            console.log("markDetails:",data)
        }


    return (
        <>
            <Card 
            sx={{display:'flex',flexDirection:'column',p:3,width:'95%',marginTop:'10px',height:'auto'}}
            >
            <CardContent>

            {
              years.map((year) => (
                sems[year - 1].map((sem) => (
                  <div key={`${year}-${sem}`}>
                    <Typography>Year {year}, Semester {sem}</Typography>
                    {subjectDetails['data'] && subjectDetails['data'].map((subject) => (
                      subject['year'] === year && subject['semester'] === sem  ? 
                      <Typography>{subject['subject_name']}</Typography>
                      : ''
                    ))}
                  </div>
                ))
              ))
            }

            </CardContent>
            
            <Button variant="contained" onClick={onSave}>Save</Button>
            </Card>
        </>
    );
}

export default ExamDetails;