import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Filter from "./utils/Filter";
import axios from "axios";
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



function TimeTable() {
  const [data, setData] = useState({})

  const [rows, setRows] = useState([]);

  const handleFilter = async () => {
    const res = await axios.post('http://localhost:5000/api/timetable/filter_timetable/', data)
    console.log(res.data)
    const rowData = res.data.map((d, index) => ({ ...d, id: index + 1 }));
    setRows(rowData.map((d) => d.timetable));
    return res.data
  }

  useEffect(() => {
    console.log("data:", data)
    handleFilter()
  }, [data])

  useEffect(() => {
    console.log('rows', rows)
  }, [rows])

  const handleData = (data) => {
    setData(data)
  }

  const onSave = () => {
    console.log("Rows:", rows)
  }

  const processRowUpdate = (updatedRow) => {
    const rowIndex = rows.findIndex((row) => row.id === updatedRow.id);

    const updatedRows = [...rows];
    updatedRows[rowIndex] = updatedRow;

    setRows(updatedRows);
    return updatedRow;

  };



  return (
    <Box flex={10} p={2}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Filter sendData={handleData} />
        <Button variant="contained" sx={{ height: '50px' }} color="success" href='/AddTimeTable'>Add TimeTable</Button>
      </Box>
      {
        rows && (
          rows.map((timetable, index) => (
            <DataGrid
              key={index}
              sx={{ width: 1200, height: 372, marginTop: 5, marginBottom: 10 }}
              rows={timetable}
              columns={columns}
              processRowUpdate={processRowUpdate}

              hideFooter={true}
              disableRowSelectionOnClick
            />
          )
          )
        )
      }
      {/* <Button variant="contained" color="success" onClick={onSave} sx={{ height: '45px', width: '80px' }}>Save</Button> */}
    </Box>
  );
}

export default TimeTable;