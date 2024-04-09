const borrbookSchema = require('../Model/BorrowlistSchema')

const bookborrow = (req,res) =>{
    const value = new borrbookSchema ({
        bookid: req.body.bookid,
        studid:req.body.studid,
        Date:req.body.Date
        
        })
        value.save()
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

const borrowedList = (req,res) =>{
  borrbookSchema.find().populate('bookid').populate('studid')
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



    module.exports = {bookborrow,borrowedList}