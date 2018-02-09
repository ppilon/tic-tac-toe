'use strict'

export let user = {
  email: '',
  token: '',
  id: '',
  login: function (email, password, token, id) {
    this.id = id
    this.email = email
    this.token = token
  }
}
