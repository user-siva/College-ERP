{/* Second Tab */ }
<CustomTabPanel value={value} index={1}>
    {studentData.map((student, index) => (
        <div key={index}>
            <Typography variant='p' component="span" id={`stuName${index}`} sx={{ color: 'gray' }}>{student.name}</Typography><br />
            <div style={{ marginBottom: 6 }}>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][0]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent"
                            control={<Radio size='small' />}
                            label="Ab"
                            onChange={(event) => handlePeriodWise(index, event.target.value, 1, event)}
                            onDoubleClick={(e) => handleDoubleClick(e, index)}

                        />
                    </RadioGroup>
                </FormControl>

                <FormControl>

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][1]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent" control={<Radio size='small' />} label="Ab" onChange={(event) => (handlePeriodWise(index, event.target.value, 2, event))} />

                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][2]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent" control={<Radio size='small' />} label="Ab" onChange={(event) => (handlePeriodWise(index, event.target.value, 3, event))} />

                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][3]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent" control={<Radio size='small' />} label="Ab" onChange={(event) => (handlePeriodWise(index, event.target.value, 4, event))} />

                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][4]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent" control={<Radio size='small' />} label="Ab" onChange={(event) => (handlePeriodWise(index, event.target.value, 5, event))} />

                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][5]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent" control={<Radio size='small' />} label="Ab" onChange={(event) => (handlePeriodWise(index, event.target.value, 6, event))} />

                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][6]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent" control={<Radio size='small' />} label="Ab" onChange={(event) => (handlePeriodWise(index, event.target.value, 7, event))} />

                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue={periodWise[index][7]}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="present" control={<Radio size='small' />} label="Pr" />
                        <FormControlLabel
                            value="absent" control={<Radio size='small' />} label="Ab" onChange={(event) => (handlePeriodWise(index, event.target.value, 8, event))} />

                    </RadioGroup>
                </FormControl>

            </div>
        </div>
    ))}
</CustomTabPanel>