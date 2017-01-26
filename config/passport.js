const passport = require('passport')
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy

const users = {}

module.exports = function (app, config) {
  passport.serializeUser(function (user, done) {
    done(null, user.oid)
  })

  passport.deserializeUser(function (id, done) {
    done(null, users[id])
  })

  passport.use(new OIDCStrategy({
    redirectUrl: config.creds.returnURL,
    allowHttpForRedirectUrl: config.allowHttpForRedirectUrl,
    clientID: config.creds.clientID,
    clientSecret: config.creds.clientSecret,
    identityMetadata: config.creds.identityMetadata,
    skipUserProfile: config.creds.skipUserProfile,
    responseType: config.creds.responseType,
    responseMode: config.creds.responseMode
  },
    function (iss, sub, profile, accessToken, refreshToken, done) {
      if (!profile.oid) {
        return done(new Error('No oid found'), null)
      }

      if (!users[profile.oid]) {
        users[profile.oid] = profile
        return done(null, profile)
      }

      return done(null, users[profile.oid])
    }
  ))
}
