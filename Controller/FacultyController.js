const facultySchema = require('../Model/FacultySchema')

const addFaculty = (req,res) =>{
    const value = new facultySchema ({
        name:req.body.name,
        id:req.body.id,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword

    })
    value.save().then((data)=>{
        res.json({
            msg:'data saved',
            data:data,
            status:200
        })
    })
  
    .catch((err)=>{
        res.json({
            msg:"data not saved",
            error:err,
            status:500
        })
        
    })

}

module.exports = {addFaculty}