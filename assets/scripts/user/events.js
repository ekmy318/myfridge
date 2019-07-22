'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(console.log)
    .catch(console.log)
  // .then(ui.signUpSuccess)
}
const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  store.signUpData = formData
  api.signUp(formData)
    .then(console.log)
    .catch(console.log)
}

const onGuest = event => {
  event.preventDefault()
  const guestInfo = {
    'credentials': {
      'email': 'guest@guest',
      'password': 'guest'
    }
  }
  api.signIn(guestInfo)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  store.user = undefined
}

const addHandlers = () => {
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGuest,
  addHandlers
}
