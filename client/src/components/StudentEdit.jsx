import { Button } from "@mui/material";
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
function StudentEdit() {
    const { Id } = useParams();
    const [feesId, setFeesId] = useState(null)
    const [examId, setExamId] = useState(null)
    const [subjectData, setSubjectData] = useState({})
    const [isSubjectFetched, setIsSubjectFerched] = useState(false)
    const [newPersonalData, setNewPersonalData] = useState({})
    const [isPersonalDataChanged, setIsPersonalDataChanged] = useState(false)
    const [newFeesData, setNewFeesData] = useState({})
    const [newExamData, setNewExamData] = useState({})

    useEffect(() => {
        const update = async () => {
            if (isPersonalDataChanged) {
                console.log("newPersonalData:", newPersonalData)
                try {
                    await axios.put(`http://localhost:5000/api/student/update/${newPersonalData._id}`, newPersonalData)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        update()
    }, [newPersonalData])

    useEffect(() => {
        const update = async () => {
            if (isPersonalDataChanged) {
                console.log("newPersonalData:", newPersonalData)
                try {
                    await axios.put(`http://localhost:5000/api/student/update/${newPersonalData._id}`, newPersonalData)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        update()
    }, [newFeesData])

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
    }
    const handleNewExamData = (data) => {
        setNewExamData(data)
    }

    //console.log("examData:", examData)

    return (
        <>
            <>
                <Card sx={{ display: 'flex', flexDirection: 'column', p: 3, width: '95%', marginTop: '10px', height: 'auto' }}>
                    {isSubjectFetched ? (
                        <>
                            <EditPersonalDetailsCard studentData={studentData} setPersonalData={handleNewPersonalData} />
                            <EditFeesDetailsCard feesData={feesData} setFeesData={handleNewFeesData} />
                            <EditExamDetailsCard examData={examData} subjectDetails={subjectData} setExamData={handleNewExamData} />
                            <Button variant="contained" >Save</Button>
                        </>
                    ) : null}
                </Card>


            </>
        </>
    );
}

export default StudentEdit;