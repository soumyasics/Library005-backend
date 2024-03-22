const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/Library')
const db = mongoose.connection
db.on('error',console.error.bind('error'))
db.once('open',()=>{
    console.log("connection successful");
})

module.exports=db
