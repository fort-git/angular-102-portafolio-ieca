const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  // Llamar el servicio que traiga los dailies
  res.status(200).json([])
})

module.exports = router
