import { TextField, styled, MenuItem, Button } from "@mui/material";
import dayjs from 'dayjs';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DynamicForm from "../utils/DynamicForm";

const STextField = styled(TextField)({
    margin: '14px'
})

function PersonalDetails({ personalDetails }) {

    const [data, setData] = useState({
        name: "",
        admission_no: "",
        admission_date: dayjs(),
        batch: "",
        register_no: "",
        roll_no: "",
        age: "",
        dob: dayjs(),
        gender: "",
        department: "",
        year: "",
        semester: "",
        blood_group: "",
        phone: "",
        email: "",
        aadhaar_no: "",
        father_name: "",
        father_phone_no: "",
        father_occupation: "",
        mother_name: "",
        mother_phone_no: "",
        mother_occupation: "",
        annual_income: "",
        nationality: "",
        religion: "",
        student_category: "",
        door_no: "",
        street: "",
        district: "",
        state: "",
        country: "",
        pincode: "",
        transportation: "",
        bus_route_no: "",
        regular_boarding_point: "",
        regular_dropping_point: "",
        gaurdian_name: "",
        gaurdian_is: "",
        gaurdian_mobile: "",
        gaurdian_address: "",
        gaurdian_2_name: "",
        gaurdian_2_mobile: "",
        gaurdian_2_address: "",
        emergency_contact: ""
    })

    const [errors, setErrors] = useState({
        name: false,
        admission_no: false,
        admission_date: dayjs(),
        batch: false,
        register_no: false,
        roll_no: false,
        age: false,
        dob: dayjs(),
        gender: false,
        department: false,
        year: false,
        semester: false,
        blood_group: false,
        phone: false,
        email: false,
        aadhaar_no: false,
        father_name: false,
        father_phone_no: false,
        father_occupation: false,
        mother_name: false,
        mother_phone_no: false,
        mother_occupation: false,
        annual_income: false,
        nationality: false,
        religion: false,
        student_category: false,
        door_no: false,
        street: false,
        district: false,
        state: false,
        country: false,
        pincode: false,
        transportation: false,
        bus_route_no: false,
        regular_boarding_point: false,
        regular_dropping_point: false,
        gaurdian_name: false,
        gaurdian_is: false,
        gaurdian_mobile: false,
        gaurdian_address: false,
        gaurdian_2_name: false,
        gaurdian_2_mobile: false,
        gaurdian_2_address: false,
        emergency_contact: false
    })

    const [customFields, setCustomFields] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;



        const newValue = (
            name === 'age' || name === 'register_no' || name === 'admission_no' || name === 'year' || name === 'semester'
        )
            ? Number(value) : value;

        setData((prev) => ({ ...prev, [name]: newValue }));
    };



    const handleAddCustomField = () => {
        const newFieldName = prompt('Enter the name for the custom field:');
        if (newFieldName && !customFields.includes(newFieldName)) {
            setCustomFields((prevFields) => [...prevFields, newFieldName]);
        }
    };

    const handleCustomInputChange = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const onSave = () => {
        personalDetails(data)
    }


    return (
        <>
            <Card
                sx={{ display: 'flex', flexDirection: 'column', p: 3, width: '95%', marginTop: '10px', height: 'auto' }}
            >
                <CardContent>
                    <STextField
                        label="Name"
                        name="name"
                        size="small"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <STextField
                        size="small"
                        label="Register No"
                        type="number"
                        name="register_no"
                        onChange={handleChange}
                        value={data.register_no}
                    />

                    <STextField
                        size="small"
                        label="Admission Number"
                        type="number"
                        name="admission_no"
                        onChange={handleChange}
                        value={data.admission_no}
                    />
                    <STextField
                        size='small'
                        type='date'
                        label='Admission Date'
                        value={data.admission_date}
                        helperText=" "
                        InputLabelProps={{ shrink: true }}
                        onChange={handleChange}
                        name='admission_date'
                        sx={{ margin: '14px' }} />

                    <STextField
                        size="small"
                        label="Batch"
                        name="batch"
                        onChange={handleChange}
                        value={data.batch}

                    />

                    <STextField
                        size="small"
                        label="Roll No"
                        type="number"
                        name="roll_no"
                        onChange={handleChange}
                        value={data.roll_no}

                    />
                    <STextField
                        size="small"
                        label="Age"
                        type="number"
                        name="age"
                        onChange={handleChange}
                        value={data.age}

                    />
                    <STextField
                        size='small'
                        type='date'
                        label='Date of Birth'
                        onChange={handleChange}
                        value={data.dob}
                        name='dob'
                        sx={{ margin: '14px' }} />

                    <STextField
                        size="small"
                        sx={{ width: '95px' }}
                        select
                        label="Gender"
                        onChange={handleChange}
                        value={data.gender}
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
                        value={data.department}
                        onChange={handleChange}
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
                        value={data.year}
                        onChange={handleChange}
                    >

                    </STextField>

                    <STextField
                        size="small"
                        sx={{ width: '95px' }}
                        label="Semester"
                        type="number"
                        name="semester"
                        value={data.semester}
                        onChange={handleChange}
                    >

                    </STextField>

                    <STextField
                        label="Blood Group"
                        name="blood_group"
                        value={data.blood_group}
                        onChange={handleChange}

                        size="small"
                    />
                    <STextField
                        label="Phone"
                        name="phone"
                        type="number"
                        value={data.phone}
                        onChange={handleChange}

                        size="small"
                    />
                    <STextField
                        label="Email"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange}

                        size="small"
                    />
                    <STextField
                        label="Aadhaar No"
                        name="aadhaar_no"
                        type="number"
                        value={data.aadhaar_no}
                        onChange={handleChange}

                        size="small"
                    />
                    <STextField
                        label="Father Name"
                        name="father_name"
                        value={data.father_name}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Father Phone No"
                        name="father_phone_no"
                        type="number"
                        value={data.father_phone_no}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Father Occupation"
                        name="father_occupation"
                        value={data.father_occupation}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Mother Name"
                        name="mother_name"
                        value={data.mother_name}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Mother Phone No"
                        name='mother_phone_no'
                        type="number"
                        value={data.mother_phone_no}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Mother Occupation"
                        name="mother_occupation"
                        value={data.mother_occupation}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Annual Income"
                        name="annual_income"
                        type="number"
                        value={data.annual_income}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Nationality"
                        name="nationality"
                        value={data.nationality}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Religion"
                        name="religion"
                        value={data.religion}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        size="small"
                        sx={{ width: '175px' }}
                        select
                        label="Student Category"
                        name="student_category"
                        value={data.student_category}
                        onChange={handleChange}
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
                        value={data.door_no}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Street"
                        name="street"
                        value={data.street}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="District"
                        name="district"
                        value={data.district}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="State"
                        name="state"
                        value={data.state}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Country"
                        name="country"
                        value={data.country}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Pincode"
                        name="pincode"
                        value={data.pincode}
                        onChange={handleChange}
                        type="number"
                        size="small"
                    />
                    <STextField
                        size="small"
                        sx={{ width: '215px' }}
                        select
                        label="Mode Of Transportation"
                        name="transportation"
                        value={data.transportation}
                        onChange={handleChange}
                    >
                        <MenuItem value='College Bus'>College Bus</MenuItem>
                        <MenuItem value='Own Vehicle'>Own Vehicle</MenuItem>
                        <MenuItem value='By Walk'>By Walk</MenuItem>
                    </STextField>
                    <STextField
                        label="Bus Route No"
                        name="bus_route_no"
                        value={data.bus_route_no}
                        onChange={handleChange}
                        type="number"
                        size="small"
                    />
                    <STextField
                        label="Regular Boarding Point"
                        name="regular_boarding_point"
                        value={data.regular_boarding_point}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Regular Dropping Point"
                        name="regular_dropping_point"
                        value={data.regular_dropping_point}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        label="Gaurdian Name"
                        name="gaurdian_name"
                        value={data.gaurdian_name}
                        onChange={handleChange}
                        size="small"
                    />
                    <STextField
                        size="small"
                        label="Gaurdian Is"
                        name="gaurdian_is"
                        value={data.gaurdian_is}
                        onChange={handleChange}
                    />
                    <STextField
                        size="small"
                        label="Gaurdian Mobile"
                        name="gaurdian_mobile"
                        type="number"
                        value={data.gaurdian_mobile}
                        onChange={handleChange}
                    />
                    <STextField
                        size="small"
                        label="Gaurdian Address"
                        name="gaurdian_address"
                        value={data.gaurdian_address}
                        onChange={handleChange}
                    />
                    <STextField
                        size="small"
                        label="Gaurdian 2 Name"
                        name="gaurdian_2_name"
                        value={data.gaurdian_2_name}
                        onChange={handleChange}
                    />
                    <STextField
                        size="small"
                        label="Gaurdian 2 Mobile"
                        type="number"
                        name="gaurdian_2_mobile"
                        value={data.gaurdian_2_mobile}
                        onChange={handleChange}
                    />
                    <STextField
                        size="small"
                        label="Gaurdian 2 Address"
                        name="gaurdian_2_address"
                        value={data.gaurdian_2_address}
                        onChange={handleChange}
                    />
                    <STextField
                        size="small"
                        label="Emergency Contact"
                        type="number"
                        name="emergency_contact"
                        value={data.emergency_contact}
                        onChange={handleChange}
                    />
                    <DynamicForm
                        customFields={customFields}
                        onInputChange={handleCustomInputChange}
                        onAddCustomField={handleAddCustomField}
                    />
                </CardContent>
                <Button variant="contained" onClick={onSave}>Save</Button>
            </Card>


        </>
    );
}

export default PersonalDetails;