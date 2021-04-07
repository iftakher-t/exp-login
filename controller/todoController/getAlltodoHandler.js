const ToDo = require('../../model/ToDo')

const getAlltodoHandler = async (req,res)=>{
    await ToDo.find( {status: 'active'}).select({_id:0,date:0}).limit(2).exec((err, data) =>{
        if(err){
        res.status(500).json({ 
            message :" server side error ",
            err })
        } else{
            res.json({
                message :" filtered todo ",
                result: data
            })
        }
    })
}

const getOnetodoHandler = async (req,res)=>{
    await ToDo.find( {_id: req.params.id}, (err, data) =>{
        if(err){
        res.status(500).json({ 
            message :" server side error ",
            err })
        } else{
            res.json({
                message :" filtered todo ",
                result: data
            })
        }
    })
}

// insert one
const posttodoHandler = (req,res)=>{
    const todo = new ToDo(req.body)
    .save()
    .then(result =>{
        res.json({ message : "Data Saved successful",
        result })
    })
    .catch(err =>{
        res.json({ err })
    })
}
// insert Many Data to DB
const postmanytodoHandler =  (req,res)=>{
     ToDo.insertMany(req.body, (err) =>{
        if(err){
        res.status(500).json({ 
            message :" server side error ",
            err })
        } else{
            res.json({
                message :" success "
            })
        }
    })

}
// update one findByIdAndUpdate
const updatetodoHandler =  (req,res)=>{
     ToDo.updateOne({_id : req.params.id}, {
        $set:{
            status : 'active'
        }
    },(err) =>{
        if(err){
        res.status(500).json({ 
            message :" server side error ",
            err })
        } else{
            res.json({
                message :" updated success "
            })
        }
    })

}

const deleteOnetodoHandler =  async (req,res)=>{
    try{
        const data = await ToDo.deleteOne( {_id: req.params.id});
  
        res.status(500).json({ 
            message :" deleted todo ",
            result : data
         })
    } catch(err){
            res.json({
                message :" server side error ",
                err
            })
        }
}
module.exports = {
    getAlltodoHandler,
    getOnetodoHandler,
    posttodoHandler,
    postmanytodoHandler,
    updatetodoHandler,
    deleteOnetodoHandler
}