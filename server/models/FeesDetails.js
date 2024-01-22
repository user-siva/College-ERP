const mongoose = require('mongoose')

const feesDetailsSchema = mongoose.Schema({
    
},
    {timestamps:true,strict:false}
)



module.exports = mongoose.model("FeesDetails",feesDetailsSchema)