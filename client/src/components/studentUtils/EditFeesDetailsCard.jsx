import { TextField, styled, Typography, CardContent } from "@mui/material";

const STextField = styled(TextField)({
    margin: '14px'
})

function EditFeesDetailsCard({ feesData }) {
    return (
        <div>
            {
                feesData && (
                    <CardContent>
                        <Typography variant="h4">Fees Details</Typography>
                        <STextField
                            label="Admission Fees"
                            name="admission_fees"
                            type="number"
                            size="small"
                            value={feesData.admission_fees}
                            required
                        />
                        <STextField
                            label="Tution Fees"
                            name="tution_fees"
                            type="number"
                            size="small"
                            value={feesData.tution_fees}
                            required
                        />
                        <STextField
                            label="Bus Fees"
                            name="bus_fees"
                            type="number"
                            size="small"
                            value={feesData.bus_fees}
                            required
                        />
                        <STextField
                            label="Hostel Fees"
                            name="hostel_fees"
                            type="number"
                            size="small"
                            value={feesData.hostel_fees}
                            required
                        />
                        <STextField
                            label="Previos Year Fees"
                            name="previous_year_balance"
                            type="number"
                            size="small"
                            value={feesData.previous_year_balance}
                            required
                        />
                        <STextField
                            label="Total Fees"
                            name="total_fees"
                            type="number"
                            size="small"
                            value={feesData.total_fees}
                            required
                        />
                        <STextField
                            label="FGG Scholarhip"
                            name="fgg"
                            type="number"
                            size="small"
                            value={feesData.fgg}
                            required
                        />
                        <STextField
                            label="PMSS Scholarhip"
                            name="pmss"
                            type="number"
                            size="small"
                            value={feesData.pmss}
                            required
                        />
                        <STextField
                            label="7.5% Govt Quota"
                            name="seven_point_five"
                            type="number"
                            size="small"
                            value={feesData.seven_point_five}
                            required
                        />
                        <STextField
                            label="KET Scholarship"
                            name="ket"
                            type="number"
                            size="small"
                            value={feesData.ket}
                            required
                        />

                    </CardContent>
                )
            }

        </div>
    );
}

export default EditFeesDetailsCard;