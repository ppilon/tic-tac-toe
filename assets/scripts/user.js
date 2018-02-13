'use strict'

export let user = {
  email: '',
  token: '',
  id: '',
  login: function (email, token, id) {
    this.id = id
    this.email = email
    this.token = token
    sessionStorage.setItem('user', JSON.stringify(this))
  },
  loggedIn: function () {
    return this.token !== ''
  }
}

if ('user' in sessionStorage) {
  const userData = JSON.parse(sessionStorage.getItem('user'))
  user.login(userData.email, userData.token, userData.id)
}
