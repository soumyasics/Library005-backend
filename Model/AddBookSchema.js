const mongoose = require('mongoose')

const addBook = new mongoose.Schema({
    title:String,
    author:String,
    isbn:Number,
    description:String,
    image:Object

    
})

module.exports=mongoose.model("Add Book",addBook)
