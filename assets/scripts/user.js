'use strict'

export let user = {
  email: '',
  token: '',
  login: function (email, token) {
    this.email = email
    this.token = token
  }
}
