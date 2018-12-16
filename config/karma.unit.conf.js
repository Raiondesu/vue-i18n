const base = require('./karma.base.conf')

// Launch safari only on macs
const hasSafari = process.platform === 'darwin'

module.exports = config => {
  config.set(Object.assign(base, {
    browsers: ['Chrome', 'Firefox'].concat(hasSafari ? ['Safari'] : []),
    reporters: ['progress'],
    singleRun: true,
    plugins: base.plugins.concat([
      'karma-chrome-launcher',
      'karma-firefox-launcher',
    ]).concat(hasSafari ? [
      'karma-safari-launcher'
    ] : [])
  }))
}
