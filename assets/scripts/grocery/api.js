'use strict'

const config = require('../config')

const getGroceries = function () {
  return $.ajax({
    url: config.apiUrl + '/groceries'
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
