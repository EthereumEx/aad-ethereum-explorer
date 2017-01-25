const path = require('path')

module.exports = {
  root: path.normalize(__dirname + '/..'),
  port: process.env.PORT || 3000,
  secret: process.env.EXPRESS_SECRET,
  creds: {
    returnURL: 'http://' + process.env.WEBSITE_HOSTNAME + '/auth/openid/return',
    identityMetadata: 'https://login.microsoftonline.com/' + process.env.AD_TENENT_ID + '/.well-known/openid-configuration',
    clientID: process.env.AD_CLIENT_ID,
    clientSecret: process.env.AD_SECRET,
    skipUserProfile: true,
    responseType: 'code',
    responseMode: 'query'
  }
}
