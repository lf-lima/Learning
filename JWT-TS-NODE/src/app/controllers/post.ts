import { Request, Response } from 'express'
import postService from '../../service/post'

class PostController {
  async store (req: Request, res: Response) {
    try {
      const { title, description, userId } = req.body

      console.log(req.user)

      const data = {
        title,
        description,
        userId
      }

      const responseService = await postService.store(data)
      return res.status(200).json(responseService)
    } catch (error) {
      return res.status(500).json({ error: 'Server Internal Error! ' })
    }
  }
}

export default new PostController()
