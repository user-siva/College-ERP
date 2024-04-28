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

function StudentEdit() {
    const { Id } = useParams();
    const [feesId, setFeesId] = useState(null)
    const [examId, setExamId] = useState(null)
    const { isLoading, error, data: studentData, isFetching, refetch: refetchStudentData } = useQuery({
        queryKey: ['studentData', Id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/student/${Id}`);
            setFeesId(res.data.feesDetails)
            return res.data;
        },
    });

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

    const { isLoading: examLoading, error: examError, data: examData, refetch: refetchExamData } = useQuery({
        queryKey: ['ExamData', Id],
        queryFn: async () => {
            if (examId != null) {
                const res = await axios.get(`http://localhost:5000/api/mark_details/${examId}`);
                return res.data;
            }
            return null;
        },
        enabled: examId != null
    });

    useEffect(() => {
        refetchStudentData();
        refetchFeesData();
    }, []);

    if (isLoading || isFetching || feesLoading) {
        return (
            <ShadowLoading />
        )
    }

    if (error || feesError) {
        console.log(error?.message || feesError?.message)
        return 'An error has occurred: ' + (error?.message || feesError?.message)
    }


    if (error) {
        console.log(error.message)
        return 'An error has occurred: ' + error.message
    }

    return (
        <>
            <>
                <Card sx={{ display: 'flex', flexDirection: 'column', p: 3, width: '95%', marginTop: '10px', height: 'auto' }}>
                    <EditPersonalDetailsCard studentData={studentData} />
                    <EditFeesDetailsCard feesData={feesData} />
                    <Button variant="contained" >Save</Button>
                </Card>


            </>
        </>
    );
}

export default StudentEdit;