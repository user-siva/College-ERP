const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    
},
    {timestamps:true,strict:false}
)



module.exports = mongoose.model("Student",studentSchema)