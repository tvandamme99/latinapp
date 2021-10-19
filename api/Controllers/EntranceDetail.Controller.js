const createError = require('http-errors');
const EntranceDetail = require('../Models/EntranceDetail.model');
const { EntranceDetailSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await EntranceDetailSchema.validateAsync(req.body)
      const entranceDetail = new EntranceDetail(result)
      const savedEntranceDetail = await entranceDetail.save()
      res.send(savedEntranceDetail)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const entranceDetail = await EntranceDetail.find({})
      res.send({ entranceDetail })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const entranceDetail = await EntranceDetail.findOne({ _id: req.params.id })
      res.send(entranceDetail)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        EntranceDetail.findOneAndDelete({ _id: req.params.id }, (err, res) => {
        if (err) throw createError.NotFound('EntranceDetail not found')
      })
      res.status(200).send("EntranceDetail successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await EntranceDetailSchema.validateAsync(req.body)
      const entranceDetail = await EntranceDetail.findOne({ _id: req.params.id })
      entranceDetail.overwrite(result);
      const savedEntranceDetail = await entranceDetail.save();
      
      res.send(savedEntranceDetail)
    } catch (error) {
      next(error)
    }
  },

};
