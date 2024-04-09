const wishbookSchema = require('../Model/WishlistSchema')

const wishbook = (req,res) =>{
    const value = new wishbookSchema ({
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

    

    module.exports = {wishbook}