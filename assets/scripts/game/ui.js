const notifications = require('../notifications')
const gameData = require('../game')
const gameApi = require('./api')
const onCreateGameSuccess = function (data) {
  gameData.game.setGameData(data)
  $('.game-piece').html(' ')
  $('#game-board .box-footer p').html(' ')
  $('#display-game-id').text(data.game.id)
  chooseGamePiece()
}

const onJoinGameSuccess = function (data) {
  console.log(data)
  $('#display-game-id').text(data.game.id)
}

const buildPreviousGame = function (cells) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 'x') {
      $('#' + i).html('<img src="' + gameData.game.player_x_piece + '"class="game-board-piece"><span class="x-o">' + cells[i] + '</span>')
    } else if (cells[i] === 'o') {
      $('#' + i).html('<img src="' + gameData.game.player_o_piece + '"class="game-board-piece"><span class="x-o">' + cells[i] + '</span>')
    }
  }
  if (gameData.game.hasWinner()) {
    $('#game-board .box-footer p').text('User' + ' ' + gameData.game.currentMove.toUpperCase() + ' ' + 'Wins')
  }
}

const onPlayerMoveSuccess = function (data) {
  gameData.game.updateCells(data)
  if (gameData.game.currentMove === 'x') {
    $('#' + gameData.game.boardPiece).html('<img src="' + gameData.game.player_x_piece + '" class="game-board-piece">' + '<span class="x-o">' + gameData.game.currentMove + '</span>')
  } else {
    $('#' + gameData.game.boardPiece).html('<img src="' + gameData.game.player_o_piece + '" class="game-board-piece">' + '<span class="x-o">' + gameData.game.currentMove + '</span>')
  }
  if (gameData.game.hasWinner()) {
    $('#game-board .box-footer p').text('User' + ' ' + gameData.game.currentMove.toUpperCase() + ' ' + 'Wins')
    gameApi.gameOver()
  } else if (gameData.game.cells.every(checkForTie)) {
    $('#game-board .box-footer p').text('Tie Game!')
  } else {
    gameData.game.switchTurn()
  }
}

const showGameBoard = function () {
  console.log('show game board')
  $('.pieces').toggle()
  $('.user-icons').toggle()
  $('.game-menu h3').toggle()
}

const chooseGamePiece = function () {
  $('.pieces').hide()
  $('.game-menu').show()
  $('#game-board .box-body .game-menu').html('<h3>Player X Choose a Game Piece </h3>')
  gameData.pieces.forEach(function (element) {
    $('#game-board .box-body .game-menu').append('<img src="' + element + '" class="user-icons">')
  })
}

const checkForTie = function (currentValue) {
  return currentValue !== ''
}

const onPlayerMoveError = function () {
  notifications.newNotification('danger', 'Could Not Make Move')
}

const getWinner = function (cells) {
  if (cells[0] === 'x' && cells[1] === 'x' && cells[2] === 'x') {
    return 'x'
  }
  if (cells[3] === 'x' && cells[4] === 'x' && cells[5] === 'x') {
    return 'x'
  }
  if (cells[6] === 'x' && cells[7] === 'x' && cells[8] === 'x') {
    return 'x'
  }
  if (cells[0] === 'x' && cells[3] === 'x' && cells[6] === 'x') {
    return 'x'
  }
  if (cells[1] === 'x' && cells[4] === 'x' && cells[7] === 'x') {
    return 'x'
  }
  if (cells[2] === 'x' && cells[5] === 'x' && cells[8] === 'x') {
    return 'x'
  }
  if (cells[0] === 'x' && cells[4] === 'x' && cells[8] === 'x') {
    return 'x'
  }
  if (cells[2] === 'x' && cells[4] === 'x' && cells[6] === 'x') {
    return 'x'
  }
  if (cells[0] === 'o' && cells[1] === 'o' && cells[2] === 'o') {
    return 'o'
  }
  if (cells[3] === 'o' && cells[4] === 'o' && cells[5] === 'o') {
    return 'o'
  }
  if (cells[6] === 'o' && cells[7] === 'o' && cells[8] === 'o') {
    return 'o'
  }
  if (cells[0] === 'o' && cells[3] === 'o' && cells[6] === 'o') {
    return 'o'
  }
  if (cells[1] === 'o' && cells[4] === 'o' && cells[7] === 'o') {
    return 'o'
  }
  if (cells[2] === 'o' && cells[5] === 'o' && cells[8] === 'o') {
    return 'o'
  }
  if (cells[0] === 'o' && cells[4] === 'o' && cells[8] === 'o') {
    return 'o'
  }
  if (cells[2] === 'o' && cells[4] === 'o' && cells[6] === 'o') {
    return 'o'
  }
}

const onGetGamesSuccess = function (data) {
  const gamesCompleted = data.games.filter(game => game.over === true)
  let xGamesWon = 0
  data.games.forEach(game => {
    if (getWinner(game.cells) === 'x' && game.over === true) {
      xGamesWon++
    }
  })
  const percentage = Math.round((xGamesWon / gamesCompleted.length) * 100)
  $('.loader').hide('slow', function () {
  })
  $('.player-game-win-percent').text(percentage + '%')
  $('.player-game-completed').text(gamesCompleted.length)
  $('.player-game-count').text(data.games.length)
}

module.exports = {
  onCreateGameSuccess,
  onPlayerMoveSuccess,
  onPlayerMoveError,
  showGameBoard,
  onGetGamesSuccess,
  buildPreviousGame,
  onJoinGameSuccess
}

console.log(gameApi)
