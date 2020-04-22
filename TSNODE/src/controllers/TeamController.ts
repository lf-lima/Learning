import { Request, Response } from 'express'
import Team from '../models/TeamModel'

class TeamController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const teams = await Team.findAll()
      return res.json(teams)
    } catch (err) {
      return res.json({ erro: err })
    }
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const team = await Team.create(req.body)
      return res.json(team)
    } catch (err) {
      return res.json({ erro: err })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      const team = await Team.update(req.body, { where: { id: req.params.id } })
      console.log(team)

      return res.json(team)
    } catch (err) {
      return res.json({ erro: err })
    }
  }
}

export default new TeamController()
