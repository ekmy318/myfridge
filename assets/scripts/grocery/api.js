'use strict'

const config = require('../config')
const store = require('../store')

const getGroceries = () => {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGroceries = formData => {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGrocery = id => {
  return $.ajax({
    url: config.apiUrl + `/groceries/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGrocery = (formData, id) => {
  return $.ajax({
    url: config.apiUrl + `/groceries/${id}`,
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getGroceries,
  createGroceries,
  deleteGrocery,
  updateGrocery
}
