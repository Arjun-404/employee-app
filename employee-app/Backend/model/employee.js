var mongoose = require('mongoose')

var Schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Sal: Number,
})                                                    
var EmployeeModel = mongoose.model("employee", Schema)
module.exports = EmployeeModel