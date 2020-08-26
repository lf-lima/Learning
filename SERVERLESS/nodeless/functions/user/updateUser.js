module.exports.handler = async event => {
  const reqBody = JSON.parse(event.body)
  const pathParams = event.pathParameters
  const queryStringParams = event.queryStringParameters
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        reqBody,
        pathParams,
        queryStringParams
      }
    )
  }
}