const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compress = require('compression')
const methodOverride = require('method-override')
const expressSession = require('express-session')
const passport = require('passport')

module.exports = function (app, config) {
  var env = process.env.NODE_ENV || 'development'
  app.locals.ENV = env

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(cookieParser())
  app.use(compress())
  app.use(methodOverride())
  // app.use(requireHTTPS)
  app.use(expressSession({
    secret: config.secret,
    resave: true,
    saveUninitialized: false
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/auth/openid', require(config.root + '/routes/auth'))
  app.use('/geth', ensureAuthenticated, require(config.root + '/routes/geth'))
  app.use('/', ensureAuthenticated, express.static(config.root + '/public'))

  app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500)
      res.send({
        message: err.message,
        error: err,
        title: 'error'
      })
    })
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: {},
      title: 'error'
    })
  })
}

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/auth/openid')
}

function requireHTTPS (req, res, next) {
  if (req.get('x-site-deployment-id') && !req.get('x-arr-ssl')) {
    return res.redirect('https://' + req.get('host') + req.url)
  }
  next()
}
