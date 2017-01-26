const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Have a good night Shawn')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('Have a good night Shawn')
})

module.exports = router
