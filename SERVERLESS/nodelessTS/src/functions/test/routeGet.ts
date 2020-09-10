import { APIGatewayProxyHandler } from 'aws-lambda'
import dynamoose from 'dynamoose'

export const handler: APIGatewayProxyHandler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Deu certo',
      infos: [
        'Eu sou um merda'
      ]
    })
  }
}
