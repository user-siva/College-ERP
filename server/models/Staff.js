const mongoose = require('mongoose')

const staffSchema = mongoose.Schema({
    
},
    {timestamps:true,strict:false}
)



module.exports = mongoose.model("Staff",staffSchema)