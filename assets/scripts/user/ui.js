'use strict'

const store = require('../store')
const api = require('./api')

const successMessage = message => {
  $('.user-message').text(message)
  $('.user-message').removeClass('failure')
  $('.user-message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('.user-message').text(message)
  $('.user-message').removeClass('success')
  $('.user-message').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccess = responseData => {
  // ('#sign-in').addClass('hide')
  api.signIn(store.save)
    .then(signInSuccess)
}

const signUpFailure = () => {
  failureMessage('Sign up failed! Please try again.')
}

const signInSuccess = responseData => {
  store.user = responseData.user
  $('#sign-in').addClass('hide')
  $('.dropdown').removeClass('hide')
}

const signInFailure = () => {
  failureMessage('Wrong email or password. Please try again.')
}

const changePasswordSuccess = () => {
  $('.password-message').text('Password changed successfully!')
  $('.password-message').removeClass('failure')
  $('.password-message').addClass('success')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('.password-message').text('Password changed failed. Please try again.')
  $('.password-message').removeClass('success')
  $('.password-message').addClass('failure')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  successMessage('See you next time!')
  $('.dropdown').addClass('hide')
  $('#sign-in').removeClass('hide')
}

const signOutFailure = () => {
  failureMessage('Sign Out failed. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
