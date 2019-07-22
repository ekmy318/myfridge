'use strict'

const showGroceriesTemplate = require('../templates/groceries-listing.handlebars')

const getBooksSuccess = (data) => {
  const showGroceriesHtml = showGroceriesTemplate({ groceries: data.groceries })
  $('.front_page').html(showGroceriesHtml)
  console.log('success: ', showGroceriesHtml)
}

module.exports = {
  getBooksSuccess
}
