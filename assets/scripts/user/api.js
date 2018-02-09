const config = require('../config')

const userObject = require('../user.js')

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-out/' + userObject.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + userObject.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/change-password/' + userObject.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + userObject.user.token
    },
    data
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword
}
