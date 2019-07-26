'use strict'

const store = require('../store')
const api = require('./api')
const groceryApi = require('../grocery/api')
const groceryUi = require('../grocery/ui')
const showHomeTemplate = require('../templates/home.handlebars')

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
  api.signIn(store.save)
    .then(signInSuccess)
    .then(groceryApi.getGroceries)
    .then(groceryUi.getGroceriesSuccess)
    .catch(signUpFailure)
}

const signUpFailure = () => {
  failureMessage('Sign up failed! Please try again.')
}

const signInSuccess = responseData => {
  store.user = responseData.user
  $('#sign-in').addClass('hide')
  $('.dropdown').removeClass('hide')
  successMessage('Welcome to your fridge!')
}

const signInFailure = () => {
  failureMessage('Wrong email or password. Please try again.')
}

const changePasswordSuccess = () => {
  $('#staticEmail').val(store.user.email)
  $('.password-message').text('Password changed successfully!')
  $('.password-message').removeClass('failure')
  $('.password-message').addClass('success')
  $('form').trigger('reset')
  $('#staticEmail').val(store.user.email)
}

const changePasswordFailure = () => {
  $('#staticEmail').val(store.user.email)
  $('.password-message').text('Password changed failed. Please try again.')
  $('.password-message').removeClass('success')
  $('.password-message').addClass('failure')
  $('form').trigger('reset')
  $('#staticEmail').val(store.user.email)
}

const signOutSuccess = () => {
  $('.main-body').html(showHomeTemplate)
  $('#sign-in').removeClass('hide')
  $('.dropdown').addClass('hide')
  successMessage('See you again soon!')
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
