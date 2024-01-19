const mongoose = require('mongoose')

const studentAttendanceSchema = mongoose.Schema({
    
},
    {timestamps:true,strict:false}
)



module.exports = mongoose.model("StudentAttendance",studentAttendanceSchema)