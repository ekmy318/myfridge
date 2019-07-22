'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetGroceries = (event) => {
  event.preventDefault()
  api.getGroceries()
    .then(ui.getBooksSuccess)
    .catch(console.log)
}

const addHandlers = () => {
  $('body').on('submit', '#sign-in', onGetGroceries)
  $('body').on('submit', '#sign-up', onGetGroceries)
}

module.exports = {
  addHandlers
}
