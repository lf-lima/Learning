import { Router } from 'express'
import userController from '../controllers/user'

const router = Router()

router.get('/', userController.findAll)
router.get('/:userId', userController.findById)
router.post('/', userController.store)
router.delete('/:userId', userController.delete)

export default router
