const notificationDiv = '.notifications'

export const newNotification = function (status, message) {
  removeAllNotifications()
  if (status === 'success') {
    $(notificationDiv).append('<div class="alert alert-success" role="alert">' + message + '</div>')
  } else {
    $(notificationDiv).append('<div class="alert alert-danger" role="alert">' + message + '</div>')
  }
}

const removeAllNotifications = function () {
  $(notificationDiv).html('')
}
