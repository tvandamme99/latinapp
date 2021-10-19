const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntranceDetailSchema = new Schema({
  entranceId: {
    type: String,
    required: true
  },
  formulaId: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  }
})

const EntranceDetail = mongoose.model('entranceDetail', EntranceDetailSchema)
module.exports = EntranceDetail
