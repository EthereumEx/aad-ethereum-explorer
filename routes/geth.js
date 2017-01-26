const express = require('express')
const config = require('../config/config')
const proxy = require('http-proxy-middleware')
const router = express.Router()

router.use('/', proxy({target: `${config.geth.rpc.host}:${config.geth.rpc.port}`}))

module.exports = router
