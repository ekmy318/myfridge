'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onCreateGroceries = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createGroceries(formData)
    .then(ui.createGroceriesSuccess)
    .then(api.getGroceries)
    .then(ui.getGroceriesSuccess)
    .catch(ui.createGroceriesFailure)
}

const onDeleteGrocery = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteGrocery(id)
    .then(ui.deleteGrocerySuccess)
    .then(api.getGroceries)
    .then(ui.getGroceriesSuccess)
    .catch(ui.deleteGroceriesFailure)
}

const onUpdateGrocery = (event) => {
  event.preventDefault()
  const id = store.id
  const formData = getFormFields(event.target)
  api.updateGrocery(formData, id)
    .then(ui.updateGroceriesSuccess)
    .then(api.getGroceries)
    .then(ui.getGroceriesSuccess)
    .catch(ui.createGroceriesFailure)
}

// data id is available on handlebar button but the form is on HTML. created separate function to store data id.
const getGroceryId = (event) => {
  event.preventDefault()
  store.id = $(event.target).data('id')
  $('.user-message').text('')
  const grocery = store.data.groceries.find(data => data.id === store.id)
  $('#updategroceryName').val(grocery.name)
  $('#updategroceryQuantity').val(grocery.quantity)
  $('#updategroceryPrice').val(grocery.price)
  $('#updategroceryExpiration_date').val(grocery.expiration_date)
  $('#updateGroceryNotes').val(grocery.notes)
}

const addHandlers = () => {
  $('html').on('submit', '#new-grocery', onCreateGroceries)
  $('html').on('click', '.delete-grocery', onDeleteGrocery)
  $('html').on('submit', '#update-grocery', onUpdateGrocery)
  $('html').on('click', '.update-grocery', getGroceryId)
}

module.exports = {
  addHandlers
}
