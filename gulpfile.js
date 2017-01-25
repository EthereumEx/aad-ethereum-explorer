const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const livereload = require('gulp-livereload')
const env = require('gulp-env')

const localEnvFile = './config/env.dev.js'

gulp.task('setEnv', () => {
  try {
    env({file: localEnvFile})
  } catch (err) {
    console.warn('No local environment file was found')
  }
})

gulp.task('develop', function () {
  livereload.listen()
  nodemon({
    script: 'app.js',
    ext: 'js handlebars coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname)
      }
    })
    this.stdout.pipe(process.stdout)
    this.stderr.pipe(process.stderr)
  })
})

gulp.task('default', [
  'develop'
])
