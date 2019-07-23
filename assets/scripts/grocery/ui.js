'use strict'

const showGroceriesTemplate = require('../templates/groceries-listing.handlebars')
const failureMessage = require('../user/ui.js')

const getGroceriesSuccess = (data) => {
  const showGroceriesHtml = showGroceriesTemplate({ groceries: data.groceries })
  $('.main-body').html(showGroceriesHtml)
}

const getGroceriesFailure = () => {
  failureMessage('Sign up failed! Please try again.')
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

module.exports = {
  getGroceriesSuccess,
  getGroceriesFailure,
  createGroceriesSuccess,
  createGroceriesFailure
}
