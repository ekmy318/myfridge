'use strict'

const userEvents = require('./user/events.js')
const groceryEvents = require('./grocery/events.js')

$(() => {
  groceryEvents.addHandlers()
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('.guest').on('click', userEvents.onGuest)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#new-grocery').on('submit', groceryEvents.onCreateGroceries)
})
