const mongoose = require('mongoose')
const staffSchema = new mongoose.Schema({
    name:String,
    id:Number,
    contact:Number,
    dob:String,
    email:String,
    password:String,
    cpassword:String
})
module.exports=mongoose.model('staff datas',staffSchema)
