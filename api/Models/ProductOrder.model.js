const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductOrderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  orderId: {
    type: String,
    required: true
  },
  total: {
      type: String,
      required: true
  }
})

const ProductOrder = mongoose.model('productOrder', ProductOrderSchema)
module.exports = ProductOrder
