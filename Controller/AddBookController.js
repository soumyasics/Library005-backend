const addbookSchema = require('../Model/AddBookSchema')
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image")

const AddBook = (req,res) =>{
    const book = new addbookSchema({
        title:req.body.title,
        author:req.body.author,
        isbn:req.body.isbn,
        description:req.body.description,
        image:req.file
    })
    book.save().then((data)=>{
        res.json({
            msg:"book added",
            data:data,
            status:200
        })
    })
        .catch((error)=>{
            res.json({
                msg:"book not added",
                error:error,
                status:400
            })
            
        })
    
}

const viewbook=(req,res)=>
{
  addbookSchema.find()
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

const bookdetails=(req,res)=>{
    const id=req.params.id
    addbookSchema.findById(id)
    .then((data)=>{
        res.json({
            msg:"data viewed",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            msg:"data not viewed",
            err:err
        })
        
    })
}

const saveeditbook = (req,res)=>{
    const id=req.params.id
    //console.log("file",req.file);
    const {title,author,isbn,description}  = req.body;
    addbookSchema.findByIdAndUpdate(id,{title,author,isbn,description,image:req.file})
    .then((data)=>{
      res.json({
        msg:"book updated",
        data:data,
      })
    })
    .catch((err)=>{
      res.json({
        msg:"book not updated",
        error:err
      })
    })
}

module.exports={AddBook,upload,viewbook,bookdetails,saveeditbook}