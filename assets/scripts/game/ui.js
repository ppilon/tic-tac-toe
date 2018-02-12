const gameData = require('../game')
const notifications = require('../notifications')

const onCreateGameSuccess = function (data) {
  gameData.game.setGameData(data)
  $('.game-menu > a').toggle()
  chooseGamePiece()
}

const onPlayerMoveSuccess = function (data) {
  gameData.game.setGameData(data)
  $('#' + gameData.game.boardPiece).html('<span class="x-o">' + gameData.game.currentMove + '</span>')
  if (gameData.game.hasWinner()) {
    $('#game-board .box-footer p').text('User' + ' ' + gameData.game.currentMove.toUpperCase() + ' ' + 'Wins')
  } else if (gameData.game.cells.every(checkForTie)) {
    $('#game-board .box-footer p').text('Tie Game!')
  } else {
    gameData.game.switchTurn()
  }
}

const showGameBoard = function () {
  $('.pieces').toggle()
  $('.user-icons').toggle()
  $('.game-menu h3').toggle()
}

const chooseGamePiece = function () {
  $('#game-board .box-body .game-menu').html('<h3> Choose a Game Piece </h3>')
  gameData.game.pieces.forEach(function (element) {
    $('#game-board .box-body .game-menu').append('<img src="' + element + '" class="user-icons">')
  })
}

const checkForTie = function (currentValue) {
  return currentValue !== ''
}

const onPlayerMoveError = function () {
  notifications.newNotification('danger', 'Could Not Make Move')
}

module.exports = {
  onCreateGameSuccess,
  onPlayerMoveSuccess,
  onPlayerMoveError,
  showGameBoard
}
