const StudentfeedSchema=require('../Model/StudentfeedSchema');
const StudentfeedRegister=(req,res)=>{
    const stud= new StudentfeedSchema({
    studid:req.body.studid,
    feedback: req.body.feedback,
    date:req.body.Date
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

const allfeedbacks = (req,res) =>{

        StudentfeedSchema.find().populate('studid')
        .then((data) => {
          res.json({
            msg: "feedback find success",
            datas: data,
          });
        })
        .catch((err) => {
          res.json({
            msg: "feedback not find",
            error: err,
          });
        });
      
}

module.exports={StudentfeedRegister,allfeedbacks}