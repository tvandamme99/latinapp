const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormulaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

const Formula = mongoose.model('formula', FormulaSchema)
module.exports = Formula
