const config = require('../config')

export const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}
