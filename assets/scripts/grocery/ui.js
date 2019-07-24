'use strict'

const showGroceriesTemplate = require('../templates/groceries-listing.handlebars')
const store = require('../store')

const getGroceriesSuccess = (data) => {
  const showGroceriesHtml = showGroceriesTemplate({ groceries: data.groceries })

  store.data = data
  console.log(store.data.groceries.name)
  $('.main-body').html(showGroceriesHtml)
}

const createGroceriesSuccess = (data) => {
  $('.new-grocery-message').text('Added Grocery!')
  $('.new-grocery-message').removeClass('failure')
  $('.new-grocery-message').addClass('success')
  $('form').trigger('reset')
}

const createGroceriesFailure = () => {
  $('.new-grocery-message').text('Failed to add. Please try again.')
  $('.new-grocery-message').removeClass('success')
  $('.new-grocery-message').addClass('failure')
  $('form').trigger('reset')
}

const deleteGrocerySuccess = () => {
  $('.user-message').text('Deleted grocery!')
  $('.user-message').removeClass('failure')
  $('.user-message').addClass('success')
}

const deleteGroceriesFailure = () => {
  $('.user-message').text('Failed to delete. Please try again.')
  $('.user-message').removeClass('success')
  $('.user-message').addClass('failure')
}

const updateGroceriesSuccess = () => {
  $('.update-grocery-message').text('Updated Grocery!')
  $('.update-grocery-message').removeClass('failure')
  $('.update-grocery-message').addClass('success')
  $('form').trigger('reset')
}

module.exports = {
  getGroceriesSuccess,
  createGroceriesSuccess,
  createGroceriesFailure,
  deleteGrocerySuccess,
  deleteGroceriesFailure,
  updateGroceriesSuccess
}
