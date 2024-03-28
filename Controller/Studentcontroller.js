const StudentSchema=require('../Model/Studentschema');
const StudentRegister=(req,res)=>{
    const stud= new StudentSchema({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    rollno: req.body.rollno,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: req.body.password,
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


const Studentlogin= async (req,res)=>{
    const {email,password}=req.body

let data=await StudentSchema.findOne({email:email})
if(data){
    if(data.password==password){
        res.json({
            status:200,
            msg:"login sucess"
        });
    }
    else{
        res.json("password is incorrect")
    }
}
else{
    res.json("Email does not exist")
}
}
const allview=(req,res)=>
{
    StudentSchema.find()
    .then((data)=>{
        res.json({
            msg:"data is obtained",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            msg:"Data not obtained",
            err:err
        })
    })
}

    const deletedata=(req,res)=>{
        const id=req.params.id
        StudentSchema.findByIdAndDelete(id)
        .then((data)=>{
            res.json({
                msg:"Data deleted",
                data:data
            })
        })
        .catch((err)=>{
            res.json({
                msg:"Data not deleted",
                err:err
            })
        })
    }


module.exports={StudentRegister,Studentlogin,deletedata,allview}
