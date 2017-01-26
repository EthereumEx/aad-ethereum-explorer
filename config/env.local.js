// Use env.local.js for environment variables that will be set when the server starts locally using gulp.
// Use for your api keys, secrets, etc. This file should **not** and is not tracked by git beyond this initial commit.
//
// You will need to set these parameters on the server you deploy to.

const config = require('./config')

module.exports = {
  NODE_ENV: 'development',
  DEBUG: 'aad-ethereum-explorer',
  WEBSITE_HOSTNAME: 'localhost:' + config.port,
  EXPRESS_SECRET: '',
  AD_SECRET: '',
  AD_TENENT_ID: '',
  AD_CLIENT_ID: ''

  // Add more env variables here
}
