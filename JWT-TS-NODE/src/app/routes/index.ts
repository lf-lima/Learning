import { Router } from 'express'
// import das rotas
import userRoutes from './user'
import loginRoutes from './login'

const router = Router()

// RAIZ
router.get('/', async (req, res) => {
  return res.send('<h1> Hellow Sun </h1>')
})

router.use('/users', userRoutes)
router.use('/login', loginRoutes)

export default router
