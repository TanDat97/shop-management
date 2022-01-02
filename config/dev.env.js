var { merge } = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PORT: 4000,
  MANAGEMENT_API: '"http://localhost:5000"',
})
