const mongoose=require('mongoose');
const scheema=new mongoose.Schema({
    studid:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Students'
    },
    feedback:String
})

module.exports= mongoose.model('Studentsfeedback',scheema)