const User = require("../model/User")

const uniqueUserGetController = async(req,res) =>{
    try{
        const { user } = req.params
        
        const userInfo = await User.findOne({userName:user})
        if(userInfo){
            res.json({
                user: userInfo
            })
        }else{
            res.json({
            message:"user not found"
            })
        }
    }
    catch(error){
        console.log(error)
        res.json({
            error
            })
        }
}

// const uniqueUserGetController = (req,res) =>{

//     const {user} = req.params

//   User.findOne({userName:user})
//         .then(result =>{
//            if(result){
//                 res.json({
//                     User: result
//                     })
//             } else {
//                 res.json({
//                 message: "user not found"
//                 })
//             }
//         })
//         .catch( error =>{
//             res.json({
//                 message:" No user yet",
//                 error
//             })
//         })
// }

module.exports = uniqueUserGetController
