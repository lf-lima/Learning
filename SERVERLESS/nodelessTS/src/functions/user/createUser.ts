import { APIGatewayProxyHandler } from 'aws-lambda'
import { User } from '../../models/user'
import dynamoose from 'dynamoose'

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    dynamoose.aws.ddb.local('http://localhost:1234')

    const user = await User.create({ id: 'user1', email: 'luiz@gmail.com', password: 'luiz123' })

    return {
      statusCode: 200,
      body: JSON.stringify({ user })
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error })
    }
  }
}
