'use strict'

const game = {
  currentMove: 'x',
  setGameData: function (data) {
    this.id = data.game.id
    this.cells = data.game.cells
    this.over = data.game.over
    this.player_x = data.game.player_x
    this.player_y = data.game.player_o
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

module.exports = {
  game
}