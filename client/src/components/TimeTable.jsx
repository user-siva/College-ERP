import { Box, Button, Typography } from "@mui/material";
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
  const [timetables, setTimetables] = useState([])
  const [rows, setRows] = useState([]);

  const handleFilter = async () => {
    const res = await axios.post('http://localhost:5000/api/timetable/filter_timetable/', data)
    const rowData = res.data.map((d, index) => ({ ...d, id: index + 1 }));
    setTimetables(rowData.map((d) => d));
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
  useEffect(() => {
    console.log('timetables', timetables)
  }, [timetables])

  const handleData = (data) => {
    setData(data)
  }

  const onSave = async (index) => {
    const updatedTimeTable = { ...timetables[index] }
    updatedTimeTable.timetable = rows[index]
    console.log("data:", updatedTimeTable)
    const res = await axios.put(`http://localhost:5000/api/timetable/update/${updatedTimeTable._id}`,
      updatedTimeTable)
    return res.data
  }

  const processRowUpdate = (updatedRow) => {
    const updatedRows = rows.map((row) => {
      const rowIndex = row.findIndex((r) => r.id === updatedRow.id);
      if (rowIndex !== -1) {
        const updatedRowArray = [...row];
        updatedRowArray[rowIndex] = updatedRow;
        return updatedRowArray;
      }
      return row;
    });
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
        rows ? (
          rows.map((timetable, index) => (
            <>
              <Typography sx={{ marginLeft: 2, marginTop: 2, fontWeight: 'bold' }}>{`Year ${timetables[index].year},Semester ${timetables[index].semester}`}</Typography>
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '10px' }}>
                <DataGrid
                  sx={{ width: 1200, height: 372, marginTop: 5, marginBottom: 2 }}
                  rows={timetable}
                  columns={columns}
                  processRowUpdate={processRowUpdate}
                  hideFooter={true}
                  disableRowSelectionOnClick
                />
                <Button variant="contained" color="success" onClick={() => onSave(index)} sx={{ height: '45px', width: '80px', marginTop: '5px' }}>Update</Button>
              </div>
            </>
          ))

        ) : 'please,select department,year and semester to view timetable'
      }

    </Box>
  );
}

export default TimeTable;