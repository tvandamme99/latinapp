const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OneEventSchema = new Schema({
  eventId: {
    type: String,
    required: true
  },
  dateDebut: {
    type: String,
    required: true
  },
  dateFin: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  }
})

const OneEvent = mongoose.model('oneEvent', OneEventSchema)
module.exports = OneEvent
