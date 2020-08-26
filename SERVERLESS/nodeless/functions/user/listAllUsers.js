module.exports.handler = async event => {
  console.log('TESTE LOG');
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      users: [
        {
          id: 1,
          email: 'luiz@g.com',
          password: 'luiz123'
        },
        {
          id: 2,
          email: 'luiz2@g.com',
          password: 'luiz123'
        },
        {
          id: 3,
          email: 'luiz3@g.com',
          password: 'luiz123'
        },
      ] 
    })
  }
}