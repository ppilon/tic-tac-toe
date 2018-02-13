const store = require('../user')
const notifications = require('../notifications')

const onSignInSuccess = function (data) {
  notifications.newNotification('success', 'Successful Login')
  store.user.login(data.user.email, data.user.token, data.user.id)
  $('.user-email').text(store.user.email)
  switchView()
}
const onSignInError = function (jqXHR, textStatus, errorThrown) {
  notifications.newNotification('danger', 'Username or Password Incorrect')
}

const onSignUpSuccess = function () {
  console.log('success!!!!!')
  $('#login-box').toggle()
  $('#signup-box').toggle()
  notifications.newNotification('success', 'Signup Successful')
}

const onSignUpError = function (jqXHR, textStatus, errorThrown) {
  console.log(this.url)
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
  $('.game-view').toggle()
  $('.auth-view').toggle()
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
  switchView
}
