import { Box, TextField, Typography, styled, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import { useQuery } from '@tanstack/react-query';
import ShadowLoading from './utils/ShadowLoading';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import axios from "axios";

const STextField = styled(TextField)({
    margin: '14px'
})

function SubjectEdit() {
    const { Id } = useParams();
    const [newData, setNewData] = useState({})

    const { isLoading, error, newData: subjectData, isFetching, refetch: refetchSubjectData, isFetched: isSubjectFetched } = useQuery({
        queryKey: ['SubjectData', Id],
        queryFn: async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/subject/${Id}`);
            setNewData(res.data)
            return res.data;
        },
    });

    if (isLoading || isFetching) {
        return (
            <ShadowLoading />
        )
    }

    if (error) {
        console.log(error.message)
        return 'An error has occurred: ' + error.message
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Convert to numbers for specific fields
        const newValue = (name === 'year' || name === 'semester' || name === 'regulation')
            ? Number(value) : value;

        setNewData((prev) => ({ ...prev, [name]: newValue }));
    }

    const onSave = () => {
        axios.put(`${process.env.REACT_APP_API_URL}/api/subject/update/${Id}`, newData)
        console.log(newData)
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            flex={10}
            p={2}
        >
            <Typography variant={'h6'} sx={{ color: 'blue', fontSize: 30, margin: '10px' }}>
                Subject
            </Typography>
            <Box
                sx={{
                    bgcolor: 'background.default',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                <Card
                    sx={{ display: 'flex', flexDirection: 'column', p: 3, width: '95%', height: 'auto' }}
                >
                    {
                        isSubjectFetched && (
                            <>
                                <CardContent>

                                    <STextField
                                        label="Subject Code"
                                        size="small"
                                        name="subject_code"
                                        value={newData.subject_code}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                    <STextField
                                        size="small"
                                        label="Subject Name"
                                        name="subject_name"
                                        value={newData.subject_name}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                    <STextField
                                        size="small"
                                        name="regulation"
                                        type="number"
                                        sx={{ width: "125px" }}
                                        value={newData.regulation}
                                        onChange={handleChange}
                                        select
                                        label="Regulation"
                                    >
                                        <MenuItem value='2017'>2017</MenuItem>
                                        <MenuItem value='2021'>2021</MenuItem>
                                    </STextField>
                                    <STextField
                                        size="small"
                                        name="department"
                                        sx={{ width: "135px" }}
                                        value={newData.department}
                                        onChange={handleChange}
                                        select
                                        label="Department"
                                    >
                                        <MenuItem value='CSE'>CSE</MenuItem>
                                        <MenuItem value='ECE'>ECE</MenuItem>
                                        <MenuItem value='ECE'>ECE</MenuItem>
                                        <MenuItem value='Mech'>Mech</MenuItem>
                                        <MenuItem value='Civil'>Civil</MenuItem>
                                    </STextField>
                                    <STextField
                                        size="small"
                                        name="year"
                                        type="number"
                                        value={newData.year}
                                        sx={{ width: "75px" }}
                                        onChange={handleChange}
                                        select
                                        label="Year"
                                    >
                                        <MenuItem value='1'>First</MenuItem>
                                        <MenuItem value='2'>Second</MenuItem>
                                        <MenuItem value='3'>Third</MenuItem>
                                        <MenuItem value='4'>Fourth</MenuItem>
                                    </STextField>

                                    <STextField
                                        size="small"
                                        name="semester"
                                        sx={{ width: "110px" }}
                                        value={newData.semester}
                                        onChange={handleChange}
                                        label="Semester"
                                        type="number"
                                    />

                                    <STextField
                                        size="small"
                                        name="staff"
                                        value={newData.staff}
                                        sx={{ width: "95px" }}
                                        onChange={handleChange}
                                        select
                                        label="Staff"
                                    >
                                        <MenuItem value='David'>David</MenuItem>
                                        <MenuItem value='Niyas'>Niyas</MenuItem>
                                    </STextField>
                                </CardContent>
                            </>
                        )
                    }
                    <Button variant="contained" type="submit" onClick={onSave}>Save</Button>
                </Card>

            </Box>


        </Box>
    );
}

export default SubjectEdit;