import { Router } from 'express'
import postController from '../controllers/post'

const router = Router()

router.post('/:userId', postController.store)

export default router
