'use strict'

const imgsPath = 'https://i.imgur.com/'

const pieces = [
  imgsPath + 'oQZKWju.png',
  imgsPath + 'oXtcrhV.png',
  imgsPath + '859ytyE.png',
  imgsPath + 'V1JsFBp.png',
  imgsPath + 'mhS8Js1.png'
]

const game = {
  currentMove: 'x',
  player_x_piece: '',
  player_o_piece: '',
  setGameData: function (data) {
    this.id = data.game.id
    this.cells = data.game.cells
    this.over = data.game.over
    this.player_x = data.game.player_x
    this.player_o = data.game.player_o
    this.player_x_piece = pieces[Math.floor(Math.random() * 4) + 0]
    this.player_o_piece = pieces[Math.floor(Math.random() * 4) + 0]
    sessionStorage.setItem('game', JSON.stringify(this))
  },
  updateCells: function (data) {
    this.cells = data.game.cells
    sessionStorage.setItem('game', JSON.stringify(this))
  },
  switchTurn: function () {
    if (this.currentMove === 'x') {
      this.currentMove = 'o'
    } else {
      this.currentMove = 'x'
    }
  },
  hasWinner: function () {
    if (this.cells[0] === 'x' && this.cells[1] === 'x' && this.cells[2] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[3] === 'x' && this.cells[4] === 'x' && this.cells[5] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[6] === 'x' && this.cells[7] === 'x' && this.cells[8] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[0] === 'x' && this.cells[3] === 'x' && this.cells[6] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[1] === 'x' && this.cells[4] === 'x' && this.cells[7] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[2] === 'x' && this.cells[5] === 'x' && this.cells[8] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[0] === 'x' && this.cells[4] === 'x' && this.cells[8] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[2] === 'x' && this.cells[4] === 'x' && this.cells[6] === 'x') {
      this.over = true
      return true
    }
    if (this.cells[0] === 'o' && this.cells[1] === 'o' && this.cells[2] === 'o') {
      this.over = true
      return true
    }
    if (this.cells[3] === 'o' && this.cells[4] === 'o' && this.cells[5] === 'o') {
      this.over = true
      return true
    }
    if (this.cells[6] === 'o' && this.cells[7] === 'o' && this.cells[8] === 'o') {
      this.over = true
      return true
    }
    if (this.cells[0] === 'o' && this.cells[3] === 'o' && this.cells[6] === 'o') {
      this.over = true
      return true
    }
    if (this.cells[1] === 'o' && this.cells[4] === 'o' && this.cells[7] === 'o') {
      this.over = true
      return true
    }
    if (this.cells[2] === 'o' && this.cells[5] === 'o' && this.cells[8] === 'o') {
      this.over = true
      return true
    }
    if (this.cells[0] === 'o' && this.cells[4] === 'o' && this.cells[8] === 'o') {
      this.over = true
      return true
    }
    if (this.cells[2] === 'o' && this.cells[4] === 'o' && this.cells[6] === 'o') {
      this.over = true
      return true
    }
  }
}

const randomizeGamePieces = function () {
  const playerXRand = (Math.random() * 4) + 0
  let playerORand = (Math.random() * 4) + 0

  if (playerXRand === playerORand) {
    playerORand = (Math.random() * 4) + 0
  }
  return
}
module.exports = {
  game,
  pieces,
  randomizeGamePieces
}

if ('game' in sessionStorage) {
  const gameUi = require('./game/ui')
  const gameData = {
    game: JSON.parse(sessionStorage.getItem('game'))
  }
  game.setGameData(gameData)
  $('.game-menu').toggle()
  $('.pieces').css('display', 'block')
  gameUi.buildPreviousGame(gameData.game.cells)
}
