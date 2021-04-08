const User = require("../../model/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRegesterController = async (req,res) =>{

const { firstName, lastName, userName, email, phone, password } = req.body

try{
 var hashPass = await bcrypt.hash(password, 10)

//  create a new object to save the db
    const user = new User({
                        firstName,
                        lastName,
                        userName, 
                        email,
                        phone, 
                        password: hashPass
                    });
            
   let result = await user.save()
    if(result){
        res.status(201).json({
            message:'User save successfully',
            user:result
            })
         }
        }
    catch(error){
        console.log(error);
        res.status(400).json({
        error
            })
        }
}

module.exports = userRegesterController




// const userRegesterController = (req,res) =>{

// const { firstName, lastName, userName, email, phone, password } = req.body

// bcrypt.hash(password, 10, (err, hash)=>{
//     if(err){
//         res.json({
//             msg:'hashing error',
//             err
//         })
//     }

// //  create a new object to save the db
//     const user = new User({
//                         firstName,
//                         lastName,
//                         userName, 
//                         email, 
//                         phone, 
//                         password: hash
//                     });

//     user.save()
//     .then(user =>{

//         res.status(400).json({
//             message:'User save successfully',
//             user
//             })
//          })
//     .catch(error =>{
//         res.status(400).json({
//         error
//             })
//         })
// });
// }



