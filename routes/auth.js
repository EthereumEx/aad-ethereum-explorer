const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('azuread-openidconnect', { failureRedirect: '/access' }),
   (req, res) => {
     res.redirect('/')
   })

router.get('/return',
  passport.authenticate('azuread-openidconnect', { failureRedirect: '/access' }),
  (req, res) => {
    res.redirect('/')
  })

router.post('/return',
  passport.authenticate('azuread-openidconnect', { failureRedirect: '/access' }),
  (req, res) => {
    res.redirect('/')
  })

module.exports = router
