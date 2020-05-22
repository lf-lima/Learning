import { Router } from 'express'
// import das rotas
import userRoutes from './user'

const router = Router()

// RAIZ
router.get('/', async (req, res) => {
  return res.send('<h1> Hellow Sun </h1>')
})

router.use('/users', userRoutes)

export default router
