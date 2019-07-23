'use strict'

const config = require('../config')
const store = require('../store')

const getGroceries = function () {
  console.log('store is: ', store)
  return $.ajax({
    url: config.apiUrl + '/groceries',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteBook = function (id) {
  return $.ajax({
    //  url: config.apiUrl + /books/ + id,
    url: config.apiUrl + `/books/${id}`,
    method: 'DELETE'
  })
}

module.exports = {
  getGroceries,
  deleteBook
}
