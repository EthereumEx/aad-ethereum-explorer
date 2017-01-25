const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Have a good night Shawn')
})

module.exports = router
