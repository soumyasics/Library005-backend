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
          data:data,
          msg:"login success",
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

const findall = (req,res) =>{

  staffSchema.find()
  .then((data) => {
    res.json({
      msg: "data find success",
      datas: data,
    });
  })
  .catch((err) => {
    res.json({
      msg: "data not find",
      error: err,
    });
  });
}

const findid=(req,res)=>{
  const id=req.params.id
  staffSchema.findById(id)

  .then((data)=>{
      res.json({
          msg:"Data viewed",
          data:data
      })
  })
  .catch((err)=>{
      res.json({
          msg:"Data not viewed",
          err:err
      })
  })
}



const ProfileEdit = (req,res) =>{
  const id = req.params.id
  const {name,email,contact} = req.body
  staffSchema.findByIdAndUpdate(id,{name,email,contact})


  .then((data)=>{
      res.json({
          msg:"Data viewed",
          data:data
      })
  })
  .catch((err)=>{
      res.json({
          msg:"Data not viewed",
          err:err
      })
  })
}

const findOne = (req,res) =>{
  const id=req.params.id
 
  staffSchema.findById(id)
  .then((data) => {
    res.json({
      msg: "data find success",
      datas: data,
    });
  })
  .catch((err) => {
    res.json({
      msg: "data not find",
      error: err,
    });
  });
}



module.exports={AddStaff,viewOne,findall,findid,ProfileEdit,findOne,}