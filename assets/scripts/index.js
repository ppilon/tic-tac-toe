'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userEvents = require('./user/events')
const gameEvents = require('./game/events')
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
    gameEvents.onGetGames()
  }
  userEvents.userHandlers()
  gameEvents.gameHandlers()
})
