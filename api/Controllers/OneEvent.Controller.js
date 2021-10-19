const createError = require('http-errors');
const OneEvent = require('../Models/OneEvent.model');
const { OneEventSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await OneEventSchema.validateAsync(req.body)
      const oneEvent = new OneEvent(result)
      const savedOneEvent = await oneEvent.save()
      const resP = {
        "_id": savedOneEvent._id,
        "eventId": savedOneEvent.eventId,
        "dateDebut": savedOneEvent.dateDebut,
        "dateFin": savedOneEvent.dateFin,
        "description": savedOneEvent.description,
      }
      res.send(resP)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const oneEvent = await OneEvent.find({})
      res.send({ oneEvent })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const oneEvent = await OneEvent.findOne({ _id: req.params.id })
      res.send(oneEvent)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        OneEvent.findOneAndDelete({ _id: req.params.id }, (err, res) => {
        if (err) throw createError.NotFound('OneEvent not found')
      })
      res.status(200).send("OneEvent successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await OneEventSchema.validateAsync(req.body)
      const oneEvent = await OneEvent.findOne({ _id: req.params.id })
      oneEvent.overwrite(result);
      const savedOneEvent = await oneEvent.save();
      
      res.send(savedOneEvent)
    } catch (error) {
      next(error)
    }
  },

};