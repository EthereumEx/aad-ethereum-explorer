const express = require('express')
const proxy = require('http-proxy-middleware')
const router = express.Router()

router.use('/', proxy({target: 'http://localhost:8545'}))

module.exports = router
