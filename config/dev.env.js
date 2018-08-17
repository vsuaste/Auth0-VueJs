'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
  AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
  YOUR_CALLBACK_URL: JSON.stringify(process.env.YOUR_CALLBACK_URL)
})
