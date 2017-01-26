const express = require('express')
const config = require('./config/config')
const debug = require('debug')('aad-ethereum-explorer')

debug('Config: ', config)

const app = express()

require('./config/express')(app, config)
require('./config/passport')(app, config)

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port)
})
