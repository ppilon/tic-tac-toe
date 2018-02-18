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

const onPieceSelect = function () {
  if (!gameObject.game.player_x.hasOwnProperty('user_piece')) {
    gameObject.game.player_x.user_piece = $(this).attr('src')
    $('#game-board .box-body .game-menu').html('<h3>Player O Choose a Game Piece </h3>')
    gameObject.game.pieces.forEach(function (element) {
      $('#game-board .box-body .game-menu').append('<img src="' + element + '" class="user-icons">')
    })
  } else if (!gameObject.game.player_o.hasOwnProperty('user_piece')) {
    gameObject.game.player_o.user_piece = $(this).attr('src')
    ui.showGameBoard()
  }
}
const onGetGames = function () {
  api.getGames()
    .then(ui.onGetGamesSuccess)
}

module.exports = {
  onCreateGame,
  onPlayerMove,
  onPieceSelect,
  onGetGames
}
