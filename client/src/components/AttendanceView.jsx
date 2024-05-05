import { Box, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import ShadowLoading from "./utils/ShadowLoading";
import {
    useQuery,
} from '@tanstack/react-query'
import axios from "axios"
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from "react";

function AttendanceView() {

    const { isLoading, error, isFetching, data, refetch, isFetched, isRefetching } = useQuery({
        queryKey: ['attendance'],
        queryFn: async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/studentAttendance/all`)
            return res.data
        },
    })

    useEffect(() => {
        console.log("data:", data)
    }, [data])

    if (isLoading || isFetching || isRefetching) {
        return (

            <ShadowLoading />
        )
    }


    if (error) {
        console.log(error.message)
        return 'An error has occurred: ' + error.message
    }

    return (
        <Box flex={10} p={2} >

            {
                data.map((student) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>
                                <span style={{ fontWeight: 600 }}>Date:</span> {student.date}
                                <span style={{ fontWeight: 600 }}> Department:</span> {student.department}
                                <span style={{ fontWeight: 600 }}> Year:</span> {student.year}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                student.attendance.map((data) => (
                                    <>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography>{data.name}:</Typography>
                                            <Typography>&nbsp;&nbsp;&nbsp;{data.status}</Typography>
                                        </Box>
                                    </>
                                ))}
                        </AccordionDetails>
                    </Accordion>
                ))
            }

        </Box>
    );
}

export default AttendanceView;