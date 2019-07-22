'use strict'

const userEvents = require('./user/events')
// const userUi = require('./user/ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('.guest').on('click', userEvents.onGuest)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
})
