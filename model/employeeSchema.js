const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
    name:{type:String,required:true},
    department:{type:String,require:true},
    salary:{type:String,required:true}
})

module.exports = mongoose.model("Employee",employeeSchema);