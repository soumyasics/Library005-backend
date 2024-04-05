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

module.exports={AddBook,upload}