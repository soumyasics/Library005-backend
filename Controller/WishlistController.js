const wishbookSchema = require('../Model/WishlistSchema')

const wishbook = (req,res) =>{
    wishbookSchema.find({studid:req.body.studid,bookid:req.body.bookid}).exec().then(data=>{


    if(data.length<=0){

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
            console.log(data);

            res.json({
                msg:"Data not saved",
                err:err,
                status:500
            })
        })   
    }else{
        res.json({
            msg:"Book already in wishlist",
            status:500
        })
    }
})
.catch((err)=>{
    console.log(err);
    res.json({
        msg:"Data not saved",
        err:err,
        status:500
    })
})  
}


    const bookcard=(req,res)=>{
        const id=req.params.id
        wishbookSchema.find({studid:id}).populate('bookid').exec()
        .then((data)=>{
            res.json({
                msg:"wishlist added",
                data:data
            }) 
        })
        .catch((err)=>{
            res.json({
                msg:"Wishlist not added",
                err:err
            })
        })
    }

    module.exports = {wishbook,bookcard}