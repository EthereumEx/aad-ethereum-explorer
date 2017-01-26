const path = require('path')

module.exports = {
  root: path.normalize(__dirname + '/..'),
  port: process.env.PORT || 3000,
  secret: process.env.EXPRESS_SECRET,
  geth: {
    IpcProvider: process.env.IPC_PROVIDER,
    rpc: {
      host: process.env.RPC_HOST || 'http://localhost',
      port: process.env.RPC_PORT || '8545'
    }
  },
  creds: {
    returnURL: 'http://' + process.env.WEBSITE_HOSTNAME + '/auth/openid/return',
    identityMetadata: 'https://login.microsoftonline.com/' + process.env.AD_TENENT_ID + '/.well-known/openid-configuration',
    clientID: process.env.AD_CLIENT_ID,
    clientSecret: process.env.AD_SECRET,
    skipUserProfile: true,
    allowHttpForRedirectUrl: true,
    responseType: 'code',
    responseMode: 'query'
  }
}
