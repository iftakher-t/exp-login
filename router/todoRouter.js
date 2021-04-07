const router = require('express').Router()

const  {
    getAlltodoHandler,
    getOnetodoHandler,
    posttodoHandler,
    postmanytodoHandler,
    updatetodoHandler,
    deleteOnetodoHandler

}  = require('../controller/todoController/getAlltodoHandler')


router.get('/', getAlltodoHandler)
router.get('/:id', getOnetodoHandler)

router.post('/', posttodoHandler)
router.post('/all', postmanytodoHandler)

router.put('/:id', updatetodoHandler)
router.delete('/:id', deleteOnetodoHandler)

module.exports = router 