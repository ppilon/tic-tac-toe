const userObject = require('../user')
const gameObject = require('../game')

const config = require('../config')

const createGame = function () {
  return $.ajax({
    url: config.apiOrigins.production + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + userObject.user.token
    }
  })
}

const updateGameBoard = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/games/' + data.game.id,
    method: 'PATCH',
    data,
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + userObject.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGameBoard
}
