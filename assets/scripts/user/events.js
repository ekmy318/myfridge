'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const groceryApi = require('../grocery/api')
const groceryUi = require('../grocery/ui')
const store = require('../store')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  store.save = formData
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(groceryApi.getGroceries)
    .then(groceryUi.getGroceriesSuccess)
    .catch(ui.signInFailure)
}

const onGuest = event => {
  event.preventDefault()
  const guestInfo = {
    'credentials': {
      'email': 'e@e',
      'password': 'e'
    }
  }
  api.signIn(guestInfo)
    .then(ui.signInSuccess)
    .then(groceryApi.getGroceries)
    .then(groceryUi.getGroceriesSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const getEmail = event => {
  event.preventDefault()
  $('#staticEmail').val(store.user.email)
}

const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const formAllReset = event => {
  $('form').trigger('reset')
}

const clear = () => {
  $('.user-message').text('')
  $('.password-message').text('')
  $('.new-grocery-message').text('')
}

const updateclear = () => {
  $('.update-grocery-message').text('')
}

const addHandlers = () => {
  $('html').on('submit', '#sign-in', onSignIn)
  $('html').on('submit', '#sign-up', onSignUp)
  $('html').on('click', '.guest', onGuest)
  $('html').on('submit', '#change-password', onChangePassword)
  $('html').on('click', '#pwchange', getEmail)
  $('html').on('click', '#sign-out', onSignOut)
  $('html').on('click', '.dropdown', clear)
  $('html').on('click', '.update-grocery', updateclear)
  $('html').on('click', '.dropdown', formAllReset)
  $('html').on('click', '.dropdown', getEmail)
}

module.exports = {
  clear,
  addHandlers
}
