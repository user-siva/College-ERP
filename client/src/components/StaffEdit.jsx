import React from 'react';
import { TextField, styled, MenuItem, Button } from "@mui/material";
import { useQuery } from '@tanstack/react-query';
import ShadowLoading from './utils/ShadowLoading';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const STextField = styled(TextField)({
    margin: '14px'
})

function StaffEdit() {
    const { Id } = useParams();
    const [newData, setNewData] = useState({})

    const { isLoading, error, newData: staffData, isFetching, refetch: refetchStaffData, isFetched: isStaffFetched } = useQuery({
        queryKey: ['staffData', Id],
        queryFn: async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/staff/${Id}`);
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

        const newValue = (
            name === 'age' || name === 'phone' || name === 'home_contact_id' || name === 'father_phone_no'
            || name === 'aadhaar_no' || name === 'emergency_contact' || name === 'mother_phone_no'
        )
            ? Number(value) : value;

        setNewData((prev) => ({ ...prev, [name]: newValue }));
    }

    const onSave = () => {
        axios.put(`${process.env.REACT_APP_API_URL}/api/staff/update/${Id}`, newData)
        console.log("Saved")
    }

    return (
        <div>
            <Card variant="outlined"
                sx={{ display: 'flex', flexDirection: 'column', p: 3, width: '95%', height: 'auto' }}
            >
                {
                    isStaffFetched && (
                        <>
                            <CardContent>
                                <STextField
                                    label="Name"
                                    size="small"
                                    name="name"
                                    value={newData.name}
                                    onChange={handleChange}
                                />
                                <STextField
                                    size="small"
                                    name="emp_id"
                                    type="number"
                                    value={newData.emp_id}
                                    onChange={handleChange}
                                    label="Employee ID"
                                />
                                <STextField
                                    size="small"
                                    name="emp_category"
                                    value={newData.emp_category}
                                    onChange={handleChange}
                                    sx={{ width: '185px' }}
                                    select
                                    label="Employee Category"
                                >
                                    <MenuItem value='Assistent Professor' >Assistent Professor</MenuItem>
                                    <MenuItem value='Professor' >Professor</MenuItem>
                                    <MenuItem value='Lab Staff' >Lab Staff</MenuItem>
                                    <MenuItem value='Supporting Staff' >Supporting Staff</MenuItem>
                                    <MenuItem value='Driver' >Driver</MenuItem>
                                    <MenuItem value='Maintanence Staff' >Maintanence Staff</MenuItem>
                                </STextField>
                                <STextField
                                    size="small"
                                    sx={{ width: '130px' }}
                                    select
                                    label="Department"
                                    name="department"
                                    value={newData.department}
                                    onChange={handleChange}
                                >
                                    <MenuItem value='CSE'>CSE</MenuItem>
                                    <MenuItem value='ECE'>ECE</MenuItem>
                                    <MenuItem value='ECE'>ECE</MenuItem>
                                    <MenuItem value='Mech'>Mech</MenuItem>
                                    <MenuItem value='Civil'>Civil</MenuItem>
                                </STextField>
                                <STextField
                                    name="dob"
                                    type='date'
                                    value={newData.dob}
                                    onChange={handleChange}
                                    size='small'
                                    label={'Date of Birth'}
                                    sx={{ margin: '14px' }} />
                                <STextField
                                    size="small"
                                    label="Father Name"
                                    name="father_name"
                                    value={newData.father_name}
                                    onChange={handleChange}
                                />
                                <STextField
                                    size="small"
                                    label="Mother Name"
                                    name="mother_name"
                                    value={newData.mother_name}
                                    onChange={handleChange}
                                />
                                <STextField
                                    size="small"
                                    label="Phone"
                                    name="phone"
                                    type="number"
                                    value={newData.phone}
                                    onChange={handleChange}
                                />
                                <STextField
                                    size="small"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={newData.email}
                                    onChange={handleChange}
                                />
                                <STextField
                                    size="small"
                                    label="Age"
                                    type="number"
                                    name="age"
                                    value={newData.age}
                                    onChange={handleChange}
                                />
                                <STextField
                                    type='date'
                                    name="date_of_joining"
                                    value={newData.date_of_joining}
                                    onChange={handleChange}
                                    size='small'
                                    label={'Date of Joining'}
                                    sx={{ margin: '14px' }} />
                                <STextField
                                    size="small"
                                    select
                                    label="Gender"
                                    name="gender"
                                    sx={{ width: "95px" }}
                                    value={newData.gender}
                                    onChange={handleChange}
                                >
                                    <MenuItem value='Male'>Male</MenuItem>
                                    <MenuItem value='Female'>Female</MenuItem>
                                </STextField>

                                <STextField
                                    label="Blood Group"
                                    name="blood_group"
                                    value={newData.blood_group}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Home Contact No"
                                    name="home_contact_id"
                                    type="number"
                                    value={newData.home_contact_id}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Aadhaar No"
                                    name="aadhaar_no"
                                    type="number"
                                    value={newData.aadhaar_no}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Father Phone No"
                                    name="father_phone_no"
                                    type="number"
                                    value={newData.father_phone_no}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Mother Phone No"
                                    name="mother_phone_no"
                                    type="number"
                                    value={newData.mother_phone_no}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Nationality"
                                    name="nationality"
                                    value={newData.nationality}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Religion"
                                    name="religion"
                                    value={newData.religion}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Door No"
                                    name="door_no"
                                    type="number"
                                    value={newData.door_no}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Street"
                                    name="street"
                                    value={newData.street}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="District"
                                    name="district"
                                    value={newData.district}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="State"
                                    name="state"
                                    value={newData.state}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Country"
                                    name="country"
                                    value={newData.country}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Pincode"
                                    name="pin_code"
                                    type="number"
                                    value={newData.pin_code}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    size="small"
                                    name="mode_of_transportation"
                                    value={newData.mode_of_transportation}
                                    sx={{ width: "210px" }}
                                    onChange={handleChange}
                                    select
                                    label="Mode Of Transportation"
                                >
                                    <MenuItem value='College Bus'>College Bus</MenuItem>
                                    <MenuItem value='Own Vehicle'>Own Vehicle</MenuItem>
                                    <MenuItem value='By Walk'>By Walk</MenuItem>
                                </STextField>
                                <STextField
                                    label="Bus Route No"
                                    name="bus_route_no"
                                    type="number"
                                    value={newData.bus_route_no}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Regular Boarding Point"
                                    name="regular_boarding_point"
                                    value={newData.regular_boarding_point}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    label="Regular Dropping Point"
                                    name="regular_dropping_point"
                                    value={newData.regular_dropping_point}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    size="small"
                                    name="marital_status"
                                    sx={{ width: "150px" }}
                                    value={newData.marital_status}
                                    onChange={handleChange}
                                    select
                                    label="Marital Status"
                                >
                                    <MenuItem value='Single'>Single</MenuItem>
                                    <MenuItem value='Married'> Married</MenuItem>
                                </STextField>
                                <STextField
                                    label="Spouse Name"
                                    name="spouse_name"
                                    value={newData.spouse_name}
                                    onChange={handleChange}
                                    size="small"
                                />
                                <STextField
                                    size="small"
                                    name="children_count"
                                    type="number"
                                    value={newData.children_count}
                                    onChange={handleChange}
                                    label="Children Count"
                                />
                                <STextField
                                    size="small"
                                    name="qualification"
                                    value={newData.qualification}
                                    onChange={handleChange}
                                    label="Qualification"
                                />
                                <STextField
                                    size="small"
                                    name="experience"
                                    type="number"
                                    value={newData.experience}
                                    onChange={handleChange}
                                    label="Experience(in Years)"
                                />
                                <STextField
                                    size="small"
                                    name="office_door_no"
                                    value={newData.office_door_no}
                                    onChange={handleChange}
                                    label="Office Door no"
                                />
                                <STextField
                                    size="small"
                                    name="office_area"
                                    value={newData.office_area}
                                    onChange={handleChange}
                                    label="Office Area"
                                />
                                <STextField
                                    size="small"
                                    name="office_district"
                                    value={newData.office_district}
                                    onChange={handleChange}
                                    label="Office District"
                                />
                                <STextField
                                    name="office_state"
                                    value={newData.office_state}
                                    onChange={handleChange}
                                    size="small"
                                    label="Office State"
                                />
                                <STextField
                                    size="small"
                                    name="office_country"
                                    value={newData.office_country}
                                    onChange={handleChange}
                                    label="Office Country"
                                />
                                <STextField
                                    size="small"
                                    name="office_pincode"
                                    type="number"
                                    value={newData.office_pincode}
                                    onChange={handleChange}
                                    label="Office Pincode"
                                />
                                <STextField
                                    size="small"
                                    name="emergency_conatact"
                                    type="number"
                                    value={newData.emergency_contact}
                                    onChange={handleChange}
                                    label="Emergency Contact"
                                />
                            </CardContent>
                        </>
                    )
                }
                <Button variant="contained" onClick={onSave}>Save</Button>
            </Card>
        </div>
    );
}

export default StaffEdit;