'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/js-preactive.cjs.production.js')
} else {
  module.exports = require('./dist/js-preactive.cjs.development.js')
}