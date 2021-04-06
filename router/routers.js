const router = require('express').Router()

const  userLoginController  = require('../controller/userLoginController')
const alluserGetController = require('../controller/alluserGetController')
const userRegesterController = require('../controller/userRegesterController')
const uniqueUserGetController = require('../controller/uniqueUserGetController')

router.post('/user/login', userLoginController)
router.get('/alluser', alluserGetController)
router.get('/unique/:user', uniqueUserGetController)
router.post('/register', userRegesterController)

module.exports = router 