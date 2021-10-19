const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntranceSchema = new Schema({
  eventId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  typePaiement: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  }
})

const Entrance = mongoose.model('entrance', EntranceSchema)
module.exports = Entrance
