'use strict'

const showGroceriesTemplate = require('../templates/groceries-listing.handlebars')
const noGroceriesTemplate = require('../templates/nogroceries.handlebars')
const store = require('../store')

const getGroceriesSuccess = (data) => {
  if (data.groceries.length === 0) {
    const noGroceriesHtml = noGroceriesTemplate({ groceries: data.groceries })
    store.data = data
    $('.main-body').html(noGroceriesHtml)
  } else {
    const showGroceriesHtml = showGroceriesTemplate({ groceries: data.groceries })
    store.data = data
    $('.main-body').html(showGroceriesHtml)
  }
}

const createGroceriesSuccess = (data) => {
  $('.user-message').text('Added Grocery!')
  $('.user-message').removeClass('failure')
  $('.user-message').addClass('success')
  $('form').trigger('reset')
  $('#newgroceryModal').modal('hide')
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
  $('.user-message').text('Updated Grocery!')
  $('.user-message').removeClass('failure')
  $('.user-message').addClass('success')
  $('form').trigger('reset')
  $('#updategroceryModal').modal('hide')
}

const updateGroceriesFailure = () => {
  $('.update-grocery-message').text('Failed to update. Please try again.')
  $('.update-grocery-message').removeClass('success')
  $('.update-grocery-message').addClass('failure')
}

module.exports = {
  getGroceriesSuccess,
  createGroceriesSuccess,
  createGroceriesFailure,
  deleteGrocerySuccess,
  deleteGroceriesFailure,
  updateGroceriesSuccess,
  updateGroceriesFailure
}
