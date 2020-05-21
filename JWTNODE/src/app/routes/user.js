const router = require('express').Router()
const userController = require('../controllers/user')

// router.get('/', userController.findAll)
router.post('/', userController.store)
// router.get('/:userId', userController.findOne)
// router.put('/:userId', userController.update)
// router.get('/:userId', userController.delete)

module.exports = router
