const router = require('express').Router()

const  userLoginController  = require('../controller/userController/userLoginController')
const alluserGetController = require('../controller/userController/alluserGetController')
const userRegesterController = require('../controller/userController/userRegesterController')
const uniqueUserGetController = require('../controller/userController/uniqueUserGetController')

router.post('/user/login', userLoginController)
router.get('/alluser', alluserGetController)
router.get('/unique/:user', uniqueUserGetController)
router.post('/register', userRegesterController)


module.exports = router 