import { Box, Tab, Tabs } from "@mui/material";
import CustomTabPanel from './utils/CustomTabPanel';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import axios from "axios"
import { useParams } from 'react-router-dom';
import {
    useQuery,
} from '@tanstack/react-query'
import ShadowLoading from './utils/ShadowLoading';
import EditPersonalDetailsCard from "./studentUtils/EditPersonalDetailsCard";
import EditFeesDetailsCard from "./studentUtils/EditFeesDetailsCard";
import EditExamDetailsCard from "./studentUtils/EditExamDetailsCard";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const handlePeriodWise = (index, choice, period, event) => {
    event.preventDefault();
    setPeriodWise(prevPeriodWise => {
        const newPeriodWise = [...prevPeriodWise];
        if (!newPeriodWise[index]) {
            newPeriodWise[index] = Array.from({ length: 8 }, () => 'present');
        }
        newPeriodWise[index] = newPeriodWise[index].map((value, idx) =>
            idx === period - 1 ? choice : value
        );
        return newPeriodWise;
    });
}

const handleDoubleClick = (index) => {
    setPeriodWise(prevPeriodWise => {
        const newPeriodWise = [...prevPeriodWise];
        console.log("newPeriodWise[index]:", newPeriodWise)
        newPeriodWise[index] = newPeriodWise[index].map((value, idx) =>
            value === 'absent' ? 'od' : value
        );
        return newPeriodWise;
    });
};

function StudentEdit() {
    const [value, setValue] = useState(0);
    const { Id } = useParams();
    const [feesId, setFeesId] = useState(null)
    const [examId, setExamId] = useState(null)
    const [subjectData, setSubjectData] = useState({})
    const [isSubjectFetched, setIsSubjectFerched] = useState(false)
    const [newPersonalData, setNewPersonalData] = useState({})
    const [isPersonalDataChanged, setIsPersonalDataChanged] = useState(false)
    const [newFeesData, setNewFeesData] = useState({})
    const [isFeesDataChanged, setIsFeesDataChanged] = useState(false)
    const [newExamData, setNewExamData] = useState({})
    const [isExamDataChanged, setIsExamDataChanged] = useState(false)

    useEffect(() => {
        const update = async () => {
            if (isPersonalDataChanged) {
                //console.log("newPersonalData:", newPersonalData)
                try {
                    await axios.put(`http://localhost:5000/api/student/update/${newPersonalData._id}`, newPersonalData)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        update()
    }, [newPersonalData, isPersonalDataChanged])

    useEffect(() => {
        const update = async () => {
            if (isFeesDataChanged) {
                //console.log("newFeesData:", newFeesData)
                try {
                    await axios.put(`http://localhost:5000/api/fees_details/update/${feesId}`, newFeesData)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        update()
    }, [newFeesData, isFeesDataChanged, feesId])

    useEffect(() => {
        const update = async () => {
            if (isExamDataChanged) {
                console.log("newExamData:", newExamData)
                try {
                    await axios.put(`http://localhost:5000/api/mark_details/update/${examId}`, newExamData)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        update()
    }, [newExamData, isExamDataChanged, examId])

    const { isLoading, error, data: studentData, isFetching, refetch: refetchStudentData, isFetched: isPersonalFetched } = useQuery({
        queryKey: ['studentData', Id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/student/${Id}`);
            setFeesId(res.data.feesDetails)
            setExamId(res.data.markDetails)
            return res.data;
        },
    });

    const getSubjects = async () => {
        try {
            if (studentData && studentData.department) {
                const subjects = await axios.post('http://localhost:5000/api/subject/filter_subjects', {
                    department: studentData.department
                });
                setSubjectData(subjects.data);
                setIsSubjectFerched(true)
            }
        } catch (err) {
            console.log("Error:", err);
        }
    };


    const { isLoading: feesLoading, error: feesError, data: feesData, refetch: refetchFeesData } = useQuery({
        queryKey: ['feesData', Id],
        queryFn: async () => {
            if (feesId != null) {
                const res = await axios.get(`http://localhost:5000/api/fees_details/${feesId}`);
                return res.data;
            }
            return null;
        },
        enabled: feesId != null
    });

    const { isLoading: examLoading, error: examError, data: examData, refetch: refetchExamData, isFetched: isExamFetched } = useQuery({
        queryKey: ['ExamData', Id],
        queryFn: async () => {
            if (examId != null) {
                const res = await axios.get(`http://localhost:5000/api/mark_details/${examId}`);
                //console.log("examId:", examId)

                return res.data;
            }
            return null;
        },
        enabled: examId != null
    });

    useEffect(() => {
        refetchStudentData();
        refetchFeesData();
        refetchExamData()
    }, []);

    useEffect(() => {
        getSubjects()
    }, [isPersonalFetched, studentData, Id])

    if (isLoading || isFetching || feesLoading || examLoading) {
        return (
            <ShadowLoading />
        )
    }


    if (error || feesError || examError) {
        console.log(error?.message || feesError?.message)
        return 'An error has occurred: ' + (error?.message || feesError?.message)
    }


    if (error) {
        console.log(error.message)
        return 'An error has occurred: ' + error.message
    }

    const handleNewPersonalData = (data) => {
        setNewPersonalData(data)
        setIsPersonalDataChanged(true)
    }



    const handleNewFeesData = (data) => {
        setNewFeesData(data)
        setIsFeesDataChanged(true)
    }
    const handleNewExamData = (data) => {
        setNewExamData(data)
        setIsExamDataChanged(true)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //console.log("examData:", examData)

    return (
        <>
            <>
                <Card sx={{ display: 'flex', flexDirection: 'column', p: 3, width: '95%', marginTop: '10px', height: 'auto' }}>
                    {isSubjectFetched && isExamFetched ? (
                        <>

                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Personal Details" {...a11yProps(0)} />
                                        <Tab label="Fees & Scholarship Details" {...a11yProps(1)} />
                                        <Tab label="Mark Details" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <EditPersonalDetailsCard studentData={studentData} setPersonalData={handleNewPersonalData} />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <EditFeesDetailsCard feesData={feesData} setFeesData={handleNewFeesData} />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    <EditExamDetailsCard examData={examData} subjectDetails={subjectData} setExamData={handleNewExamData} />
                                </CustomTabPanel>
                            </Box>

                        </>
                    ) : null}
                </Card>


            </>
        </>
    );
}

export default StudentEdit;