const express = require('express')
const route = express.Router()
const staffController = require('../Controller/StaffControl')
const student=require('../Controller/Studentcontroller');
const faculty = require('../Controller/FacultyController')
const addBook = require('../Controller/AddBookController')


route.post('/addstaff',staffController.AddStaff)
route.post('/find',staffController.viewOne)
route.get('/finddetails',staffController.findall);
route.get('/findvalues/:id',staffController.findid);
route.post('/editprofile/:id',staffController.ProfileEdit);
route.get('/viewone/:id',staffController.findOne);



route.post('/Sregister',student.StudentRegister);
route.post('/Slogin',student.Studentlogin);
route.get('/all',student.allview);
route.post('/delone/:id',student.deletedata);


route.post('/addbook',addBook.upload,addBook.AddBook)


route.post('/fadd',faculty.addFaculty);

module.exports=route
