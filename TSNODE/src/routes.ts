import { Router, Request, Response } from 'express'

// IMPORTANDO CONTROLLERS
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes
