class User {
  id
  email
  password

  constructor({ id, email, password }) {
    this.id = id
    this.email = email
    this.password = password
  }
}

module.exports.handler = async event => {
  const userData = JSON.parse(event.body)

  const user = new User(userData)
  
  return {
    statusCode: 200,
    body: JSON.stringify(user)
  }
}