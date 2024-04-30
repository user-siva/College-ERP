import { TextField, styled, Button, Typography } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const STextField = styled(TextField)({
    margin: '14px'
})


function EditExamDetailsCard({ examData, subjectDetails, setExamData }) {
    //console.log("examData:", examData)
    // console.log("subjectDetails:", subjectDetails)

    //console.log("subjectDetails:", subjectDetails)

    const years = [1, 2, 3, 4]
    const sems = [[1, 2], [3, 4], [5, 6], [7, 8]]

    const [newData, setNewData] = useState(examData)

    const handleInputChange = (year, semester, subject, exam, value) => {
        setNewData(prevData => (
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

    const onSave = () => {
        console.log("Saved", newData)
        setExamData(newData)
    }

    return (
        <div>
            <Typography variant='h4'>Mark Details:</Typography>
            <CardContent>
                <>
                    {years.map((year) => (
                        <div key={year}>
                            <Typography sx={{ fontWeight: 600, marginBottom: '5px' }}>Year :{year}</Typography>
                            {sems[year - 1].map((sem) => (
                                <div key={`${year}-${sem}`}>
                                    <Typography sx={{ fontWeight: 450, marginBottom: '3px' }}>Semester {sem}</Typography>
                                    {subjectDetails.map((subject) => (
                                        subject['year'] === year && subject['semester'] === sem ? (
                                            <div key={subject['subject_name']}>
                                                <Typography>{subject['subject_name']}</Typography>
                                                <STextField
                                                    size="small"
                                                    name="IAT 1"
                                                    sx={{ width: "110px" }}
                                                    label="IAT 1"
                                                    defaultValue={examData?.[`year ${year}`]?.[`semester ${sem}`]?.['IAT 1']?.[`${subject['subject_name']}`]}
                                                    onChange={(e) => handleInputChange(year, sem, subject['subject_name'], 'IAT 1', e.target.value)}
                                                />
                                                <STextField
                                                    size="small"
                                                    name="IAT 2"
                                                    sx={{ width: "110px" }}
                                                    label="IAT 2"
                                                    defaultValue={examData?.[`year ${year}`]?.[`semester ${sem}`]?.['IAT 2']?.[`${subject['subject_name']}`]}
                                                    onChange={(e) => handleInputChange(year, sem, subject['subject_name'], 'IAT 2', e.target.value)}
                                                />
                                                <STextField
                                                    size="small"
                                                    name="IAT 3"
                                                    sx={{ width: "110px" }}
                                                    label="IAT 3"
                                                    defaultValue={examData?.[`year ${year}`]?.[`semester ${sem}`]?.['IAT 3']?.[`${subject['subject_name']}`]}
                                                    onChange={(e) => handleInputChange(year, sem, subject['subject_name'], 'IAT 3', e.target.value)}
                                                />
                                                <STextField
                                                    size="small"
                                                    name="Semester"
                                                    sx={{ width: "110px" }}
                                                    label="semester"
                                                    defaultValue={examData?.[`year ${year}`]?.[`semester ${sem}`]?.['Semester']?.[`${subject['subject_name']}`]}
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
                <Button variant="contained" onClick={onSave}>Save</Button>
            </CardContent>
        </div>
    );
}

export default EditExamDetailsCard;