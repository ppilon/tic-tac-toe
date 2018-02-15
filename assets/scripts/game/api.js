const userObject = require('../user')
const gameObject = require('../game')

const config = require('../config')

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + userObject.user.token
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + userObject.user.token
    }
  })
}

const gameOver = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/' + gameObject.game.id,
    method: 'PATCH',
    data: {
      game: {
        over: true
      }
    },
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + userObject.user.token
    }
  })
}

const updateGameBoard = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.game.id,
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
  updateGameBoard,
  getGames,
  gameOver
}
