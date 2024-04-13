const express = require('express')
const route = express.Router()
const staffController = require('../Controller/StaffControl')
const student=require('../Controller/Studentcontroller');
const faculty = require('../Controller/FacultyController');
const addBook = require('../Controller/AddBookController');
const borrbook=require('../Controller/BorrowlistController');
const wishbook=require('../Controller/WishlistController')
const studfeedback=require('../Controller/StudentfeedController')


route.post('/addstaff',staffController.AddStaff)
route.post('/find',staffController.viewOne)
route.get('/finddetails',staffController.findall);
route.get('/findvalues/:id',staffController.findid);
route.post('/editprofile/:id',staffController.ProfileEdit);
route.get('/viewone/:id',staffController.findOne);


//student
route.post('/Sregister',student.StudentRegister);
route.post('/Slogin',student.Studentlogin);
route.get('/all',student.allview);
route.post('/delone/:id',student.deletedata);
route.get('/findname/:id',student.findname)
route.post('/updateone/:id',student.updatestudent)


route.post('/addbook',addBook.upload,addBook.AddBook)
route.get('/viewbook',addBook.viewbook)
route.get('/Bookdetails/:id',addBook.bookdetails)
route.post('/savebook/:id',addBook.upload,addBook.saveeditbook)

route.post('/Studfeedback',studfeedback.StudentfeedRegister)
route.get('/showfeedback',studfeedback.allfeedbacks)




//faculty
route.post('/fadd',faculty.addFaculty);


route.post('/borbook',borrbook.bookborrow);
route.get('/viewborrowbook',borrbook.borrowedList);
route.post('/acceptbook/:id',borrbook.borrowUpdate);
route.get('/notapprove/:id',borrbook.approval);
route.post('/deleteborrow/:id',borrbook.deleteBorrowBook);


route.post('/wishbook',wishbook.wishbook);


module.exports=route
