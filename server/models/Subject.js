const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({
    
},
    {timestamps:true,strict:false}
)



module.exports = mongoose.model("Subject",subjectSchema)