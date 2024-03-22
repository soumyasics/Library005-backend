const staffSchema = require('../Model/StaffSchema')

const AddStaff = (req,res) =>{
    const value = new staffSchema ({
        name:req.body.name,
        id:req.body.id,
        contact:req.body.contact,
        dob:req.body.dob,
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

const viewOne = async(req,res) =>{
    const {email,password}=req.body
    let data=await staffSchema.findOne({email:email})
    if(data){
      if(data.password==password){
        res.json({
          status:200
        })
      }
      else{
        res.json("password is incorrect")
      }
    }
    else{
      res.json("Email incorrect")
    }
    
  }

module.exports={AddStaff,viewOne}