'use strict'

const showGroceriesTemplate = require('../templates/groceries-listing.handlebars')
const failureMessage = require('../user/ui.js')

const getGroceriesSuccess = (data) => {
  console.log('make it this far?')
  const showGroceriesHtml = showGroceriesTemplate({ groceries: data.groceries })
  $('.main-body').html(showGroceriesHtml)
  console.log('data :', data)
  console.log('new html: ', showGroceriesHtml)
}

const getGroceriesFailure = () => {
  failureMessage('Sign up failed! Please try again.')
}

module.exports = {
  getGroceriesSuccess,
  getGroceriesFailure
}
