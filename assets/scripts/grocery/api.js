'use strict'

const config = require('../config')
const store = require('../store')

const getGroceries = function () {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGroceries = formData => {
  console.log('formData is', formData)
  return $.ajax({
    url: config.apiUrl + '/groceries',
    data: formData,
    method: 'POST',
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
  createGroceries,
  deleteBook
}
