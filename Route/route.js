const express = require('express')
const route = express.Router()
const staffController = require('../Controller/StaffControl')
const student=require('../Controller/Studentcontroller');

route.post('/addstaff',staffController.AddStaff)
route.post('/find',staffController.viewOne)


route.post('/Sregister',student.StudentRegister);
route.post('/Slogin',student.Studentlogin);
route.get('/all',student.allview);
route.post('/delone/:id',student.deletedata);

module.exports=route
