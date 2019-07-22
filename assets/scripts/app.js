'use strict'

const userEvents = require('./user/events')
// const userUi = require('./user/ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  userEvents.addHandlers()
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-up').on('submit', userEvents.onSignUp)
  // $('body').on('click', '.nav-sign-in', userEvents.onSignInButtonNav)
  // $('#change-password').on('submit', userEvents.onChangePassword)
  // $('#change-password-button').on('submit', userUi.showChangePassword)
  // $('#sign-out').on('submit', userEvents.onSignOut)
  // $('#guest-player').on('click', userEvents.onGuest)
})
