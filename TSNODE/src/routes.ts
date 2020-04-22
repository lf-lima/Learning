import { Router } from 'express'

// IMPORTANDO CONTROLLERS
import UserController from './controllers/UserController'
import TeamController from './controllers/TeamController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.get('/teams', TeamController.index)
routes.post('/teams', TeamController.store)
routes.put('/teams/:id', TeamController.update)

export default routes
