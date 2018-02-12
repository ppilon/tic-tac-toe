const api = require('./api')

const ui = require('./ui')

const gameObject = require('../game')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
}

const onPlayerMove = function () {
  if ($(this).text() === ' ' && gameObject.game.over !== true) {
    const boardPiece = $(this).attr('id')
    gameObject.game.boardPiece = boardPiece
    const data = {
      game: {
        id: gameObject.game.id,
        cell: {
          index: boardPiece,
          value: gameObject.game.currentMove
        },
        over: false
      }
    }
    api.updateGameBoard(data)
      .then(ui.onPlayerMoveSuccess)
      .catch(ui.onPlayerMoveError)
  }
}

module.exports = {
  onCreateGame,
  onPlayerMove
}
