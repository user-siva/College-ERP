import { Box } from "@mui/material";
import { TextField, styled, MenuItem, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from 'axios';


const departments = [
    {
        value: 'CSE',
        label: 'CSE',
    },
    {
        value: 'ECE',
        label: 'ECE',
    },
    {
        value: 'EEE',
        label: 'EEE',
    },
    {
        value: 'MECH',
        label: 'MECH',
    },
    {
        value: 'Civil',
        label: 'Civil',
    },
];

const years = [
    {
        value: 1,
        label: '1 year',
    },
    {
        value: 2,
        label: '2 year',
    },
    {
        value: 3,
        label: '3 year',
    },
    {
        value: 4,
        label: '4 year',
    }
];

const semesters = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    }
];

const columns = [
    { field: 'day', headerName: 'Day' },
    {
        field: '1',
        headerName: '1',
        sortable: false,
        editable: true,
    },
    {
        field: '2',
        headerName: '2',
        sortable: false,
        editable: true,
    },
    {
        field: '3',
        headerName: '3',
        sortable: false,
        editable: true,
    },
    {
        field: '4',
        headerName: '4',
        sortable: false,
        editable: true,
    },
    {
        field: '5',
        headerName: '5',
        sortable: false,
        editable: true,
    },
    {
        field: '6',
        headerName: '6',
        sortable: false,
        editable: true,
    },
    {
        field: '7',
        headerName: '7',
        sortable: false,
        editable: true,
    },
    {
        field: '8',
        headerName: '8',
        sortable: false,
        editable: true,

    },
];

const handleChange = () => {
    console.log("hi")
}

function AddTimeTable() {
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [semester, setSemester] = useState('')

    const [rows, setRows] = useState(

        [
            { id: 1, day: 'monday', 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" },
            { id: 2, day: 'tuesday', 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" },
            { id: 3, day: 'wednesday', 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" },
            { id: 4, day: 'thursday', 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" },
            { id: 5, day: 'friday', 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" },
            { id: 6, day: 'saturday', 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" },
        ]
    );

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(Number(event.target.value));
    };

    const handleSemesterChange = (event) => {
        setSemester(Number(event.target.value));
    };

    const onSave = async () => {
        try {
            rows.map((row, index) => {
                row['id'] = `${department}_${year}_${semester}_${index + 1}`
            })
            await axios.post('http://localhost:5000/api/timetable/add',
                { department: department, year: year, semester: semester, timetable: rows })
            console.log("SAVED")
        }
        catch (err) {
            console.log(err)
        }
    }

    const processRowUpdate = (updatedRow, originalRow) => {
        const rowIndex = rows.findIndex((row) => row.id === updatedRow.id);

        const updatedRows = [...rows];
        updatedRows[rowIndex] = updatedRow;
        updatedRows.map((d) => {
            console.log('d:', d)
        })
        setRows(updatedRows);
        return updatedRow;

    };

    useEffect(() => {
        console.log("rows:", rows)
    }, [rows])

    return (
        <Box flex={10} p={2} >
            <Box>
                <TextField
                    id="outlined-select-department"
                    select
                    label="Department"
                    name="department"
                    onChange={handleDepartmentChange}
                    helperText="Please select the department"
                >
                    {departments.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-year"
                    select
                    label="Year"
                    name="year"
                    onChange={handleYearChange}
                    helperText="Please select the year"
                    sx={{ marginLeft: "10px" }}
                >
                    {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-year"
                    select
                    label="Semester"
                    name="semester"
                    onChange={handleSemesterChange}
                    helperText="Please select the Semester"
                    sx={{ marginLeft: "10px" }}
                >
                    {semesters.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

            </Box>
            <DataGrid
                rows={rows}
                columns={columns}
                processRowUpdate={processRowUpdate}
                hideFooterPagination={true}
                disableRowSelectionOnClick
            />
            <Button variant="contained" color="success" onClick={onSave} sx={{ height: '45px', width: '80px' }}>Save</Button>
        </Box>
    );
}

export default AddTimeTable;