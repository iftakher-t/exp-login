const bcrypt = require('bcrypt');
const User = require("../../model/User")
var jwt = require('jsonwebtoken');
const secretkey = "key"
const userLoginController = async (req,res) =>{
    
    try{
    const { email, password } = req.body

    const user = await User.findOne({ email })

            if(user){
               const isValid = await bcrypt.compare(password, user.password)
              let data = {
                  userName : user.userName,
                  phone : user.phone,
              }

               const token = jwt.sign(data ,secretkey )
               if(isValid){
                        res.json({
                            message:'User login success',
                            token
                        })
                    } else {
                        res.json({
                            message: "password doesn't match"
                            })
                    }
                } else {
                res.json({
                    message: "user not found"
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

module.exports = userLoginController



// const userLoginController = (req,res) =>{

//     const { email, password } = req.body

//     User.findOne({ email })
//         .then( user =>{
//             if(user){
//                 bcrypt.compare(password, user.password, (err, result)=>{
//                     if(err){
//                         res.json({
//                             err
//                             })
//                     }
//                      //--------------
//                     if(result){
//                         res.json({
//                             message:'User login success',
//                             result
//                         })
//                     }else {
//                         res.json({
//                             message: "password doesn't match"
//                             })
//                     }
//                      //----------------------------
//                 });
//             } else {
//                 res.json({
//                     message: "user not found"
//                 })
//              }
//         })
// } 
