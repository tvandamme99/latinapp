const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  recurrence: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Event = mongoose.model('event', EventSchema)
module.exports = Event
