import { ALBHandler } from 'aws-lambda'

export const handler: ALBHandler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Teste AlbLambda',
      event
    })
  }
}
