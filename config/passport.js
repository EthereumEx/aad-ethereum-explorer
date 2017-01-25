const passport = require('passport')
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy

const users = {}

module.exports = function (app, config) {
  passport.serializeUser(function (user, done) {
    done(null, user.email)
  })

  passport.deserializeUser(function (id, done) {
    done(null, users[id])
  })

  passport.use(new OIDCStrategy({
    callbackURL: config.creds.returnURL,
    realm: config.creds.realm,
    clientID: config.creds.clientID,
    clientSecret: config.creds.clientSecret,
    oidcIssuer: config.creds.issuer,
    identityMetadata: config.creds.identityMetadata,
    skipUserProfile: config.creds.skipUserProfile,
    responseType: config.creds.responseType,
    responseMode: config.creds.responseMode
  },
    function (iss, sub, profile, accessToken, refreshToken, done) {
      if (!profile.email) {
        return done(new Error('No email found'), null)
      }

      if (!users[profile.email]) {
        users[profile.email] = profile
        return done(null, profile)
      }

      return done(null, users[profile.email])
    }
  ))
}
