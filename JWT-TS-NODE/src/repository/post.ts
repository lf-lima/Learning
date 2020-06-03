import Post from '../infra/models/post'

interface IPostData {
  title: string
  description: string
  userId: number
}

class PostRepository {
  async store (data: IPostData) {
    try {
      const post = await Post.create(data)
      return post
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new PostRepository()
