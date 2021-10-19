const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
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

const Order = mongoose.model('order', OrderSchema)
module.exports = Order
