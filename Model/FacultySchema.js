const mongoose = require('mongoose')
const facultySchema = new mongoose.Schema({
    name:String,
    id:Number,
    contact:Number,
    Email:String,
    password:String,
    cpassword:String
})
module.exports = mongoose.model("faculty datas",facultySchema)