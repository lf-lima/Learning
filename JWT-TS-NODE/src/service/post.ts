import postRepository from '../repository/post'

interface IPostData {
  title: string
  description: string
  userId: number
}

class PostService {
  async store (data: IPostData) {
    try {
      const responseRepository = await postRepository.store(data)
      return responseRepository
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new PostService()
