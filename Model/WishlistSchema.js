const mongoose=require('mongoose')
const wishlist=new mongoose.Schema({
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Books'
    },
    studid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Students'
    },
    Date:Date

})
module.exports=mongoose.model('Wishlist',wishlist)





