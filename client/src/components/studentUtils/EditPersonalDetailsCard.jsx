import { TextField, styled, MenuItem, Typography, CardContent } from "@mui/material";

const STextField = styled(TextField)({
    margin: '14px'
})

function EditPersonalDetailsCard({ studentData }) {
    return (
        <>
            <Typography variant="h4">Personal Details</Typography>
            <CardContent>
                <STextField
                    label="Name"
                    name="name"
                    size="small"
                    value={studentData.name}
                />
                <STextField
                    size="small"
                    label="Register No"
                    type="number"
                    name="register_no"
                    value={studentData.register_no}

                />
                <STextField
                    size="small"
                    label="Admission Number"
                    type="number"
                    name="admission_no"
                    value={studentData.admission_no}
                />
                <STextField
                    size='small'
                    type='date'
                    label='Admission Date'
                    value={studentData.admission_date}
                    helperText=" "
                    InputLabelProps={{ shrink: true }}
                    name='admission_date'
                    sx={{ margin: '14px' }} />

                <STextField
                    size="small"
                    label="Batch"
                    name="batch"
                    value={studentData.batch}

                />

                <STextField
                    size="small"
                    label="Roll No"
                    type="number"
                    name="roll_no"
                    value={studentData.roll_no}

                />
                <STextField
                    size="small"
                    label="Age"
                    type="number"
                    name="age"
                    value={studentData.age}

                />
                <STextField
                    size='small'
                    type='date'
                    label='Date of Birth'
                    value={studentData.dob}
                    name='dob'
                    sx={{ margin: '14px' }} />

                <STextField
                    size="small"
                    sx={{ width: '95px' }}
                    select
                    label="Gender"
                    value={studentData.gender}
                    name="gender"
                >
                    <MenuItem value='Male' >Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                </STextField>
                <STextField
                    size="small"
                    sx={{ width: '130px' }}
                    select
                    label="Department"
                    name="department"
                    value={studentData.department}
                >
                    <MenuItem value='CSE'>CSE</MenuItem>
                    <MenuItem value='ECE'>ECE</MenuItem>
                    <MenuItem value='ECE'>ECE</MenuItem>
                    <MenuItem value='Mech'>Mech</MenuItem>
                    <MenuItem value='Civil'>Civil</MenuItem>
                </STextField>
                <STextField
                    size="small"
                    sx={{ width: '95px' }}
                    label="Year"
                    type="number"
                    name="year"
                    value={studentData.year}
                >

                </STextField>

                <STextField
                    size="small"
                    sx={{ width: '95px' }}
                    label="Semester"
                    type="number"
                    name="semester"
                    value={studentData.semester}
                >

                </STextField>

                <STextField
                    label="Blood Group"
                    name="blood_group"
                    value={studentData.blood_group}

                    size="small"
                />
                <STextField
                    label="Phone"
                    name="phone"
                    type="number"
                    value={studentData.phone}

                    size="small"
                />
                <STextField
                    label="Email"
                    name="email"
                    type="email"
                    value={studentData.email}

                    size="small"
                />
                <STextField
                    label="Aadhaar No"
                    name="aadhaar_no"
                    type="number"
                    value={studentData.aadhaar_no}

                    size="small"
                />
                <STextField
                    label="Father Name"
                    name="father_name"
                    value={studentData.father_name}
                    size="small"
                />
                <STextField
                    label="Father Phone No"
                    name="father_phone_no"
                    type="number"
                    value={studentData.father_phone_no}
                    size="small"
                />
                <STextField
                    label="Father Occupation"
                    name="father_occupation"
                    value={studentData.father_occupation}
                    size="small"
                />
                <STextField
                    label="Mother Name"
                    name="mother_name"
                    value={studentData.mother_name}
                    size="small"
                />
                <STextField
                    label="Mother Phone No"
                    name='mother_phone_no'
                    type="number"
                    value={studentData.mother_phone_no}
                    size="small"
                />
                <STextField
                    label="Mother Occupation"
                    name="mother_occupation"
                    value={studentData.mother_occupation}
                    size="small"
                />
                <STextField
                    label="Annual Income"
                    name="annual_income"
                    type="number"
                    value={studentData.annual_income}
                    size="small"
                />
                <STextField
                    label="Nationality"
                    name="nationality"
                    value={studentData.nationality}
                    size="small"
                />
                <STextField
                    label="Religion"
                    name="religion"
                    value={studentData.religion}
                    size="small"
                />
                <STextField
                    size="small"
                    sx={{ width: '175px' }}
                    select
                    label="Student Category"
                    name="student_category"
                    value={studentData.student_category}
                >
                    <MenuItem value='BC'>BC</MenuItem>
                    <MenuItem value='MBC'>MBC</MenuItem>
                    <MenuItem value='OC'>OC</MenuItem>
                    <MenuItem value='SC/ST'>SC/ST</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                </STextField>
                <STextField
                    label="Door No"
                    name="door_no"
                    value={studentData.door_no}
                    size="small"
                />
                <STextField
                    label="Street"
                    name="street"
                    value={studentData.street}
                    size="small"
                />
                <STextField
                    label="District"
                    name="district"
                    value={studentData.district}
                    size="small"
                />
                <STextField
                    label="State"
                    name="state"
                    value={studentData.state}
                    size="small"
                />
                <STextField
                    label="Country"
                    name="country"
                    value={studentData.country}
                    size="small"
                />
                <STextField
                    label="Pincode"
                    name="pincode"
                    value={studentData.pincode}
                    type="number"
                    size="small"
                />
                <STextField
                    size="small"
                    sx={{ width: '215px' }}
                    select
                    label="Mode Of Transportation"
                    name="transportation"
                    value={studentData.transportation}
                >
                    <MenuItem value='College Bus'>College Bus</MenuItem>
                    <MenuItem value='Own Vehicle'>Own Vehicle</MenuItem>
                    <MenuItem value='By Walk'>By Walk</MenuItem>
                </STextField>
                <STextField
                    label="Bus Route No"
                    name="bus_route_no"
                    value={studentData.bus_route_no}
                    type="number"
                    size="small"
                />
                <STextField
                    label="Regular Boarding Point"
                    name="regular_boarding_point"
                    value={studentData.regular_boarding_point}
                    size="small"
                />
                <STextField
                    label="Regular Dropping Point"
                    name="regular_dropping_point"
                    value={studentData.regular_dropping_point}
                    size="small"
                />
                <STextField
                    label="Gaurdian Name"
                    name="gaurdian_name"
                    value={studentData.gaurdian_name}
                    size="small"
                />
                <STextField
                    size="small"
                    label="Gaurdian Is"
                    name="gaurdian_is"
                    value={studentData.gaurdian_is}
                />
                <STextField
                    size="small"
                    label="Gaurdian Mobile"
                    name="gaurdian_mobile"
                    type="number"
                    value={studentData.gaurdian_mobile}
                />
                <STextField
                    size="small"
                    label="Gaurdian Address"
                    name="gaurdian_address"
                    value={studentData.gaurdian_address}
                />
                <STextField
                    size="small"
                    label="Gaurdian 2 Name"
                    name="gaurdian_2_name"
                    value={studentData.gaurdian_2_name}
                />
                <STextField
                    size="small"
                    label="Gaurdian 2 Mobile"
                    type="number"
                    name="gaurdian_2_mobile"
                    value={studentData.gaurdian_2_mobile}
                />
                <STextField
                    size="small"
                    label="Gaurdian 2 Address"
                    name="gaurdian_2_address"
                    value={studentData.gaurdian_2_address}
                />
                <STextField
                    size="small"
                    label="Emergency Contact"
                    type="number"
                    name="emergency_contact"
                    value={studentData.emergency_contact}
                />

            </CardContent>
        </>
    );
}

export default EditPersonalDetailsCard;