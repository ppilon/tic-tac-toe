'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const UserEvents = require('./user/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#login-form').on('submit', UserEvents.onSignIn)
  $('#signup-form').on('submit', UserEvents.onSignUp)
  $('.signup-link').on('click', function () {
    $('#login-box').toggle()
    $('#signup-box').toggle()
  })
})
