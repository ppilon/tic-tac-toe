const store = require('../user.js')

export const onSignInSuccess = function (data) {
  $('#login-box').toggle()
  const dangerBanner = '<div class="alert alert-success" role="alert"><span class="sr-only">Error:</span>Signed In Successfully</div>'
  $('.banners').html(dangerBanner)
  store.user.login(data.user.email, data.user.password, data.user.token)
  $('#user-info').text("User: " + store.user.email)

}
export const onSignInError = function (jqXHR, textStatus, errorThrown) {
  console.log(jqXHR)
  const dangerBanner = '<div class="alert alert-danger" role="alert"><i class="fas fa-exclamation"></i><span class="sr-only">Error:</span>Email or Password Incorrect</div>'
  $('.banners').html(dangerBanner)
}
