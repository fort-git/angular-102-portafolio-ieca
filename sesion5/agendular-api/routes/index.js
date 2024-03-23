const express = require('express')
const dailiesRoutes = require('./dailies.router')

function routerApi (app) {
  const router = express.Router()

  app.use('/api/v1', router)

  router.use('/dailies', dailiesRoutes)
}

module.exports = routerApi
