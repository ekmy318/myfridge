'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGroceries = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createGroceries(formData)
    .then(ui.createGroceriesSuccess)
    .then(api.getGroceries)
    .then(ui.getGroceriesSuccess)
    .catch(ui.createGroceriesFailure)
}

const addHandlers = () => {
  $(document).on('submit', '#new-grocery', onCreateGroceries)
}

module.exports = {
  addHandlers
}
