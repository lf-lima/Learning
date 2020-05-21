const router = require('express').Router()
const userRoutes = require('./user')

router.get('/', (req, res) => {
  return res.status(200).send('<h1> HOMEZADA </h1>')
})

router.use('/users', userRoutes)

module.exports = router
