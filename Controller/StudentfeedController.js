const StudentfeedSchema=require('../Model/StudentfeedSchema');
const StudentfeedRegister=(req,res)=>{
    const stud= new StudentfeedSchema({
    studid:req.body.studid,
    feedback: req.body.feedback,
    })
    stud.save()
    .then((data)=>{
        res.json({
            msg:"Data saved successfully",
            data:data,
            status:200
        })
    })
    .catch((err)=>{
        res.json({
            msg:"Data not saved",
            err:err,
            status:500
        })
    })
}

module.exports={StudentfeedRegister}