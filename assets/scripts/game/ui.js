const gameData = require('../game')
const notifications = require('../notifications')

const onCreateGameSuccess = function (data) {
  gameData.game.setGameData(data)
  $('.game-menu > a').toggle()
  $('.pieces').toggle()
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

const checkForTie = function (currentValue) {
  return currentValue !== ''
}

const onPlayerMoveError = function () {
  notifications.newNotification('danger', 'Could Not Make Move')
}

module.exports = {
  onCreateGameSuccess,
  onPlayerMoveSuccess,
  onPlayerMoveError
}
