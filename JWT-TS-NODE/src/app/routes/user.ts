import { Router } from 'express'
import userController from '../controllers/user'

const router = Router()

router.get('/', async (req, res) => {
  return res.send('<h1> PAGE USERS </H1>')
})

router.post('/', userController.store)

export default router
