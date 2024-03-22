const express = require('express')
const route = express.Router()
const staffController = require('../Controller/StaffControl')

route.post('/addstaff',staffController.AddStaff)
route.post('/find',staffController.viewOne)

module.exports=route
