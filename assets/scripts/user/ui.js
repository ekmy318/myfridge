'use strict'

const store = require('../store')
const api = require('./api')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const signUpSuccess = responseData => {
  successMessage('Sign up success')
  $('#sign-up').addClass('hide')
  $('#guest-player').addClass('hide')
  api.signIn(store.signUpData)
    .then(signInSuccess)
}

const signUpFailure = () => {
  failureMessage('Sign up failed')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  if (store.user.email === 'guest@guest') {
    successMessage(`Welcome Guest Player!`)
    $('#user').removeClass('hide')
    $('#user').text('Signed in as Guest Player')
    $('#stats').addClass('hide')
    $('#sign-up').addClass('hide')
    $('#sign-in').addClass('hide')
    $('#guest-player').addClass('hide')
    $('#change-password-button').addClass('hide')
    $('.instructions').addClass('hide')
    $('#sign-out').removeClass('hide')
    $('#new-game').removeClass('hide')
    $('form').trigger('reset')
  } else {
    successMessage(`Welcome ${store.user.email}!`)
    $('#user').removeClass('hide')
    $('#user').text(`Signed in as ${store.user.email}`)
    $('#sign-out').removeClass('hide')
    $('#new-game').removeClass('hide')
    $('#change-password-button').removeClass('hide')
    $('.instructions').addClass('hide')
    $('#stats').removeClass('hide')
    $('#sign-up').addClass('hide')
    $('#sign-in').addClass('hide')
    $('#guest-player').addClass('hide')
    $('form').trigger('reset')
  }
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

const changePasswordSuccess = (responseData) => {
  successMessage('Password changed successfully')
  $('#change-password').addClass('hide')
}

const changePasswordFailure = () => {
  failureMessage('Password change failed')
}

const showChangePassword = () => {
  event.preventDefault()
  $('#change-password').removeClass('hide')
}

const signOutSuccess = () => {
  successMessage('Successfully signed out. Hope you play again!')
  $('#change-password-button').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#new-game').addClass('hide')
  $('#stats').addClass('hide')
  $('#sign-up').removeClass('hide')
  $('#sign-in').removeClass('hide')
  $('#gameboard').addClass('hide')
  $('#guest-player').removeClass('hide')
  $('#user').text('')
  $('#user').addClass('hide')
  $('.instructions').removeClass('hide')
}

const signOutFailure = () => {
  failureMessage('Sign Out Failure')
  $('.square').text('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  showChangePassword
}
