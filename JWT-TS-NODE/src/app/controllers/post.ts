import { Request, Response } from 'express'
import postService from '../../service/post'

class PostController {
  async store (req: Request, res: Response) {
    try {
      const { title, description } = req.body

      const data = {
        title,
        description,
        userId: req.user.id
      }

      const responseService = await postService.store(data)
      return res.status(200).json(responseService)
    } catch (error) {
      return res.status(500).json({ error: 'Server Internal Error! ' })
    }
  }
}

export default new PostController()
