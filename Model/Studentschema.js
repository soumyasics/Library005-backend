const mongoose=require('mongoose');
const scheema=new mongoose.Schema({
    firstname: String,
    lastname: String,
    rollno: Number,
    email: String,
    phonenumber: Number,
    password: String,
})

module.exports= mongoose.model('Student Registration',scheema)