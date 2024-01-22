const mongoose = require('mongoose')

const markDetailsSchema = mongoose.Schema({
    
},
    {timestamps:true,strict:false}
)



module.exports = mongoose.model("MarkDetails",markDetailsSchema)