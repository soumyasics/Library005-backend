const borrbookSchema = require('../Model/BorrowlistSchema')

const bookborrow = (req,res) =>{

    borrbookSchema.find({studid:req.body.studid,bookid:req.body.bookid}).exec().then(data=>{
        if(data.length<=0){

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
    }else{
        res.json({
            msg:"book already borrowed",
            status:500
    })}

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
  borrbookSchema.find({approvalStatus:true}).populate('bookid').populate('studid')
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

const approval = (req,res) =>{
    borrbookSchema.find({approvalStatus:false}).populate('bookid').populate('studid')
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

const borrowUpdate = (req,res) =>{
    const id = req.params.id
    borrbookSchema.findByIdAndUpdate(id,{approvalStatus:true})
    .then((data)=>{
        res.json({
            msg:"book approved",
            data:data,
            status:200
        })
    })
    .catch((error)=>{
        res.json({
            msg:"book not approved",
            error:error,
            status:500
        })
    })
}

const deleteBorrowBook=(req,res)=>{
    const id=req.params.id
        borrbookSchema.findByIdAndDelete(id)
        .then((data)=>{
            res.json({
                msg:"borrow deleted",
                data:data
            })
        })
        .catch((err)=>{
            res.json({
                msg:"borrow not deleted",
                err:err
            })
        })
}

    module.exports = {bookborrow,borrowedList,borrowUpdate,approval,deleteBorrowBook}