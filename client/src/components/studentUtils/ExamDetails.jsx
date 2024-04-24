import { TextField, styled, Button, Typography } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const STextField = styled(TextField)({
  margin: '14px'
})

function ExamDetails({ markDetails, subjectDetails }) {

  const [data, setData] = useState({})

  //console.log("subjectDetails:", subjectDetails)

  const years = [1, 2, 3, 4]
  const sems = [[1, 2], [3, 4], [5, 6], [7, 8]]

  const handleInputChange = (year, semester, subject, exam, value) => {
    setData(prevData => (
      {
        ...prevData,
        [`year ${year}`]: {
          ...prevData[`year ${year}`],
          [`semester ${semester}`]: {
            ...prevData[`year ${year}`]?.[`semester ${semester}`],
            [exam]: {
              ...prevData[`year ${year}`]?.[`semester ${semester}`]?.[exam],
              [subject]: value
            }
          }
        }
      }
    ))
  }

  const handleSave = () => {
    markDetails(data)
    console.log("Data:", data);
  };

  return (
    <>
      <Card
        sx={{ display: 'flex', flexDirection: 'column', p: 3, width: '95%', marginTop: '10px', height: 'auto' }}
      >
        <CardContent>
          <>
            {years.map((year) => (
              <div key={year}>
                <Typography sx={{ fontWeight: 600, marginBottom: '5px' }}>Year :{year}</Typography>
                {sems[year - 1].map((sem) => (
                  <div key={`${year}-${sem}`}>
                    <Typography sx={{ fontWeight: 450, marginBottom: '3px' }}>Semester {sem}</Typography>
                    {subjectDetails['data'].map((subject) => (
                      subject['year'] === year && subject['semester'] === sem ? (
                        <div key={subject['subject_name']}>
                          <Typography>{subject['subject_name']}</Typography>
                          <STextField
                            size="small"
                            name="IAT 1"
                            sx={{ width: "110px" }}
                            label="IAT 1"
                            onChange={(e) => handleInputChange(year, sem, subject['subject_name'], 'IAT 1', e.target.value)}
                          />
                          <STextField
                            size="small"
                            name="IAT 2"
                            sx={{ width: "110px" }}
                            label="IAT 2"
                            onChange={(e) => handleInputChange(year, sem, subject['subject_name'], 'IAT 2', e.target.value)}
                          />
                          <STextField
                            size="small"
                            name="IAT 3"
                            sx={{ width: "110px" }}
                            label="IAT 3"
                            onChange={(e) => handleInputChange(year, sem, subject['subject_name'], 'IAT 3', e.target.value)}
                          />
                          <STextField
                            size="small"
                            name="Semester"
                            sx={{ width: "110px" }}
                            label="semester"
                            onChange={(e) => handleInputChange(year, sem, subject['subject_name'], 'Semester', e.target.value)}
                          />
                        </div>
                      ) : null
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </>

        </CardContent>

        <Button variant="contained" onClick={handleSave}>Save</Button>
      </Card>
    </>
  );
}

export default ExamDetails;