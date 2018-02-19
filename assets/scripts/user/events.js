const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordError)
}

const userHandlers = function () {
  $('#login-form').on('submit', onSignIn)
  $('#signup-form').on('submit', onSignUp)
  $('#change-pass-form').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.signup-login-link').on('click', ui.toggleSignup)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  userHandlers
}
