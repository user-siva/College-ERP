import { TextField, styled, MenuItem, Typography, CardContent, Button } from "@mui/material";
import dayjs from 'dayjs';
import { useState } from "react";

const STextField = styled(TextField)({
    margin: '14px'
})

function EditPersonalDetailsCard({ studentData, setPersonalData }) {
    const [newData, setNewData] = useState(studentData)

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newValue = (
            name === 'age' || name === 'register_no' || name === 'admission_no' || name === 'year' || name === 'semester'
        )
            ? Number(value) : value;
        setNewData((prev) => ({ ...prev, [name]: newValue }));
    };

    const onSave = () => {
        console.log("Saved:", newData)
        setPersonalData(newData)
    }

    const formatDate = (date) => {
        return date ? dayjs(date).format('YYYY-MM-DD') : '';
    }

    return (
        <>
            <Typography variant="h4">Personal Details</Typography>
            <CardContent>
                <STextField
                    label="Name"
                    name="name"
                    size="small"
                    defaultValue={studentData?.name}
                    onChange={handleChange}
                />
                <STextField
                    size="small"
                    label="Register No"
                    type="number"
                    name="register_no"
                    defaultValue={studentData?.register_no}
                    onChange={handleChange}

                />
                <STextField
                    size="small"
                    label="Admission Number"
                    type="number"
                    name="admission_no"
                    defaultValue={studentData?.admission_no}
                    onChange={handleChange}

                />
                {/* <STextField
                    size='small'
                    label='Admission Date'
                    defaultValue={newData.admission_date ? formatDate(newData.admission_date) : ''}
                    helperText=" "
                    InputLabelProps={{ shrink: true }}
                    onChange={handleChange}
                    name='admission_date'
                    sx={{ margin: '14px' }} /> */}

                <STextField
                    size="small"
                    label="Batch"
                    name="batch"
                    defaultValue={studentData?.batch}
                    onChange={handleChange}
                />

                <STextField
                    size="small"
                    label="Roll No"
                    type="number"
                    name="roll_no"
                    defaultValue={studentData?.roll_no}
                    onChange={handleChange}

                />
                <STextField
                    size="small"
                    label="Age"
                    type="number"
                    name="age"
                    defaultValue={studentData?.age}
                    onChange={handleChange}
                />
                {/* <STextField
                    size='small'
                    label='Date of Birth'
                    defaultValue={studentData?.dob ? formatDate(studentData?.dob) : ''}
                    name='dob'
                    onChange={handleChange}

                    sx={{ margin: '14px' }} /> */}

                <STextField
                    size="small"
                    sx={{ width: '95px' }}
                    select
                    label="Gender"
                    defaultValue={studentData?.gender}
                    onChange={handleChange}
                    name="gender"
                >
                    <MenuItem defaultValue='Male' >Male</MenuItem>
                    <MenuItem defaultValue='Female'>Female</MenuItem>
                </STextField>
                <STextField
                    size="small"
                    sx={{ width: '130px' }}
                    select
                    label="Department"
                    name="department"
                    onChange={handleChange}
                    defaultValue={studentData?.department}
                >
                    <MenuItem defaultValue='CSE'>CSE</MenuItem>
                    <MenuItem defaultValue='ECE'>ECE</MenuItem>
                    <MenuItem defaultValue='ECE'>ECE</MenuItem>
                    <MenuItem defaultValue='Mech'>Mech</MenuItem>
                    <MenuItem defaultValue='Civil'>Civil</MenuItem>
                </STextField>
                <STextField
                    size="small"
                    sx={{ width: '95px' }}
                    label="Year"
                    type="number"
                    name="year"
                    onChange={handleChange}
                    defaultValue={studentData?.year}
                >

                </STextField>

                <STextField
                    size="small"
                    sx={{ width: '95px' }}
                    label="Semester"
                    type="number"
                    name="semester"
                    onChange={handleChange}
                    defaultValue={studentData?.semester}
                >

                </STextField>

                <STextField
                    label="Blood Group"
                    name="blood_group"
                    defaultValue={studentData?.blood_group}
                    onChange={handleChange}
                    size="small"
                />
                <STextField
                    label="Phone"
                    name="phone"
                    type="number"
                    defaultValue={studentData?.phone}
                    onChange={handleChange}
                    size="small"
                />
                <STextField
                    label="Email"
                    name="email"
                    type="email"
                    defaultValue={studentData?.email}
                    onChange={handleChange}
                    size="small"
                />
                <STextField
                    label="Aadhaar No"
                    name="aadhaar_no"
                    type="number"
                    defaultValue={studentData?.aadhaar_no}
                    onChange={handleChange}

                    size="small"
                />
                <STextField
                    label="Father Name"
                    name="father_name"
                    defaultValue={studentData?.father_name}
                    size="small"
                    onChange={handleChange}

                />
                <STextField
                    label="Father Phone No"
                    name="father_phone_no"
                    type="number"
                    defaultValue={studentData?.father_phone_no}
                    size="small"
                    onChange={handleChange}
                />
                <STextField
                    label="Father Occupation"
                    name="father_occupation"
                    defaultValue={studentData?.father_occupation}
                    size="small"
                    onChange={handleChange}
                />
                <STextField
                    label="Mother Name"
                    name="mother_name"
                    defaultValue={studentData?.mother_name}
                    size="small"
                    onChange={handleChange}
                />
                <STextField
                    label="Mother Phone No"
                    name='mother_phone_no'
                    type="number"
                    defaultValue={studentData?.mother_phone_no}
                    size="small"
                    onChange={handleChange}

                />
                <STextField
                    label="Mother Occupation"
                    name="mother_occupation"
                    defaultValue={studentData?.mother_occupation}
                    size="small"
                    onChange={handleChange}
                />
                <STextField
                    label="Annual Income"
                    name="annual_income"
                    type="number"
                    defaultValue={studentData?.annual_income}
                    size="small"
                    onChange={handleChange}
                />
                <STextField
                    label="Nationality"
                    name="nationality"
                    defaultValue={studentData?.nationality}
                    size="small"
                    onChange={handleChange}
                />
                <STextField
                    label="Religion"
                    name="religion"
                    defaultValue={studentData?.religion}
                    size="small"
                    onChange={handleChange}
                />
                <STextField
                    size="small"
                    sx={{ width: '175px' }}
                    select
                    label="Student Category"
                    onChange={handleChange}
                    name="student_category"
                    defaultValue={studentData?.student_category}
                >
                    <MenuItem defaultValue='BC'>BC</MenuItem>
                    <MenuItem defaultValue='MBC'>MBC</MenuItem>
                    <MenuItem defaultValue='OC'>OC</MenuItem>
                    <MenuItem defaultValue='SC/ST'>SC/ST</MenuItem>
                    <MenuItem defaultValue='Other'>Other</MenuItem>
                </STextField>
                <STextField
                    onChange={handleChange}
                    label="Door No"
                    name="door_no"
                    defaultValue={studentData?.door_no}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="Street"
                    name="street"
                    defaultValue={studentData?.street}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="District"
                    name="district"
                    defaultValue={studentData?.district}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="State"
                    name="state"
                    defaultValue={studentData?.state}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="Country"
                    name="country"
                    defaultValue={studentData?.country}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="Pincode"
                    name="pincode"
                    defaultValue={studentData?.pincode}
                    type="number"
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    sx={{ width: '215px' }}
                    select
                    label="Mode Of Transportation"
                    name="transportation"
                    defaultValue={studentData?.transportation}
                >
                    <MenuItem defaultValue='College Bus'>College Bus</MenuItem>
                    <MenuItem defaultValue='Own Vehicle'>Own Vehicle</MenuItem>
                    <MenuItem defaultValue='By Walk'>By Walk</MenuItem>
                </STextField>
                <STextField
                    onChange={handleChange}
                    label="Bus Route No"
                    name="bus_route_no"
                    defaultValue={studentData?.bus_route_no}
                    type="number"
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="Regular Boarding Point"
                    name="regular_boarding_point"
                    defaultValue={studentData?.regular_boarding_point}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="Regular Dropping Point"
                    name="regular_dropping_point"
                    defaultValue={studentData?.regular_dropping_point}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    label="Gaurdian Name"
                    name="gaurdian_name"
                    defaultValue={studentData?.gaurdian_name}
                    size="small"
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    label="Gaurdian Is"
                    name="gaurdian_is"
                    defaultValue={studentData?.gaurdian_is}
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    label="Gaurdian Mobile"
                    name="gaurdian_mobile"
                    type="number"
                    defaultValue={studentData?.gaurdian_mobile}
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    label="Gaurdian Address"
                    name="gaurdian_address"
                    defaultValue={studentData?.gaurdian_address}
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    label="Gaurdian 2 Name"
                    name="gaurdian_2_name"
                    defaultValue={studentData?.gaurdian_2_name}
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    label="Gaurdian 2 Mobile"
                    type="number"
                    name="gaurdian_2_mobile"
                    defaultValue={studentData?.gaurdian_2_mobile}
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    label="Gaurdian 2 Address"
                    name="gaurdian_2_address"
                    defaultValue={studentData?.gaurdian_2_address}
                />
                <STextField
                    onChange={handleChange}
                    size="small"
                    label="Emergency Contact"
                    type="number"
                    name="emergency_contact"
                    defaultValue={studentData?.emergency_contact}
                />
            </CardContent>
            <Button variant="contained" onClick={onSave}>Save</Button>

        </>
    );
}

export default EditPersonalDetailsCard;