const app = require('./app')
const port = 3333

require('./infra/database')

app.listen(port, () => {
  console.log('Server On')
  console.log(`Listen: http://localhost:${port}`)
})
