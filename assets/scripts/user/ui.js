const store = require('../user')
const notifications = require('../notifications')

const onSignInSuccess = function (data) {
  $('#login-box').toggle()
  notifications.newNotification('success', 'Successful Login')
  store.user.login(data.user.email, data.user.password, data.user.token)
  $('#user-info').text('User: ' + store.user.email)
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

module.exports = {
  onSignInSuccess,
  onSignInError,
  onSignUpSuccess,
  onSignUpError
}
