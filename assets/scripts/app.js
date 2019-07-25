'use strict'

const userEvents = require('./user/events.js')
const groceryEvents = require('./grocery/events.js')

$(() => {
  userEvents.addHandlers()
  groceryEvents.addHandlers()
}
)
