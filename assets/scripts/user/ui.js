const store = require('../user')
const notifications = require('../notifications')
const GameEvents = require('../game/events')

const onSignInSuccess = function (data) {
  notifications.newNotification('success', 'Successful Login')
  store.user.login(data.user.email, data.user.token, data.user.id)
  $('.user-email').text(store.user.email)
  $('#login-form .form-control').val('')
  switchView()
  GameEvents.onGetGames()
}
const onSignInError = function (jqXHR, textStatus, errorThrown) {
  notifications.newNotification('danger', 'Username or Password Incorrect')
}

const toggleSignup = function () {
  $('#login-box').toggle()
  $('#signup-box').toggle()
}

const onSignUpSuccess = function () {
  $('#login-box').toggle()
  $('#signup-box').toggle()
  notifications.newNotification('success', 'Signup Successful')
  GameEvents.onGetGames()
}

const onSignUpError = function (jqXHR, textStatus, errorThrown) {
  notifications.newNotification('danger', 'Signup Failed')
}

const onSignOutSuccess = function () {
  switchView()
  sessionStorage.removeItem('user')
  notifications.newNotification('success', 'Sign Out Successful')
}

const onChangePasswordSuccess = function () {
  $('#change-password-modal').modal('hide')
  notifications.newNotification('success', 'Change Password Successful')
}

const onChangePasswordError = function () {
  $('.message').text('Error Changing Password')
}

const switchView = function () {
  $('.game-view').toggle("slow")
  $('.auth-view').toggle("slow")
  $('.user-nav').toggle()
}

module.exports = {
  onSignInSuccess,
  onSignInError,
  onSignUpSuccess,
  onSignUpError,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onChangePasswordError,
  switchView,
  toggleSignup
}
