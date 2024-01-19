const mongoose = require('mongoose')

const timeTableSchema = mongoose.Schema({
    
},
    {timestamps:true,strict:false}
)



module.exports = mongoose.model("TimeTable",timeTableSchema)