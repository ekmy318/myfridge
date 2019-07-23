'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGroceries = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createGroceries(formData)
    .then(ui.createGroceriesSuccess)
    .catch(ui.createGroceriesFailure)
}

const addHandlers = () => {
  $('#new-grocery').on('submit', onCreateGroceries)
}

module.exports = {
  addHandlers
}
