const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

export const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}
