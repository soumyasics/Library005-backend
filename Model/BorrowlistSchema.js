const mongoose = require('mongoose')

const borrowbook = new mongoose.Schema({
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Books'
    },
    studid:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Students'
    },
    Date:Date,
    approvalStatus:{
        type:Boolean,
        default:false
    }
    
})

module.exports=mongoose.model("Borrowlist",borrowbook)
