'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const UserEvents = require('./user/events')
const GameEvents = require('./game/events')
const userData = require('./user.js')
const UserUi = require('./user/ui')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  if (userData.user.loggedIn()) {
    UserUi.switchView()
    GameEvents.onGetGames()
  }
  $('#login-form').on('submit', UserEvents.onSignIn)
  $('#signup-form').on('submit', UserEvents.onSignUp)
  $('.signup-link').on('click', function () {
    $('#login-box').toggle()
    $('#signup-box').toggle()
  })
  $('#change-pass-form').on('submit', UserEvents.onChangePassword)
  $('#sign-out').on('click', UserEvents.onSignOut)
  $('.game-piece').on('click', GameEvents.onPlayerMove)
  $('.new-game').on('click', GameEvents.onCreateGame)
  $('body').on('click', '.user-icons', GameEvents.onPieceSelect)
})
