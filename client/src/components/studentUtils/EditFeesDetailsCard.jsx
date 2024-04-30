import { TextField, styled, Typography, CardContent, Button } from "@mui/material";
import { useState } from "react";

const STextField = styled(TextField)({
    margin: '14px'
})

function EditFeesDetailsCard({ feesData, setFeesData }) {

    const [newData, setNewData] = useState(feesData)

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newValue = Number(value)

        setNewData((prev) => ({ ...prev, [name]: newValue }));
    };

    const onSave = () => {
        setFeesData(newData)
    }

    return (
        <div>
            {<>
                <CardContent>
                    {

                        feesData && (
                            <>
                                <Typography variant="h4">Fees Details</Typography>
                                <STextField
                                    onChange={handleChange}
                                    label="Admission Fees"
                                    name="admission_fees"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.admission_fees}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="Tution Fees"
                                    name="tution_fees"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.tution_fees}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="Bus Fees"
                                    name="bus_fees"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.bus_fees}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="Hostel Fees"
                                    name="hostel_fees"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.hostel_fees}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="Previos Year Fees"
                                    name="previous_year_balance"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.previous_year_balance}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="Total Fees"
                                    name="total_fees"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.total_fees}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="FGG Scholarhip"
                                    name="fgg"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.fgg}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="PMSS Scholarhip"
                                    name="pmss"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.pmss}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="7.5% Govt Quota"
                                    name="seven_point_five"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.seven_point_five}
                                    required
                                />
                                <STextField
                                    onChange={handleChange}
                                    label="KET Scholarship"
                                    name="ket"
                                    type="number"
                                    size="small"
                                    defaultValue={feesData.ket}
                                    required
                                />
                            </>
                        )

                    }

                </CardContent>
                <Button variant="contained" onClick={onSave}>Save</Button>
            </>
            }

        </div>
    );
}

export default EditFeesDetailsCard;