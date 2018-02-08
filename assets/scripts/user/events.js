const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

module.exports = {
  onSignIn,
  onSignUp
}
