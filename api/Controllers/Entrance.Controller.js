const createError = require('http-errors');
const Entrance = require('../Models/Entrance.model');
const { EntranceSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await EntranceSchema.validateAsync(req.body)
      const entrance = new Entrance(result)
      const savedEntrance = await entrance.save()
      res.send({ "_id": savedEntrance._id, "eventId": savedEntrance.eventId, "date": savedEntrance.date, "typePaiement": savedEntrance.typePaiement, "total": savedEntrance.total })
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const entrance = await Entrance.find({})
      res.send({ entrance })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const entrance = await Entrance.findOne({ _id: req.params.id })
      res.send(entrance)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        Entrance.findOneAndDelete({ _id: req.params.id }, (err, res) => {
        if (err) throw createError.NotFound('Entrance not found')
      })
      res.status(200).send("Entrance successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await EntranceSchema.validateAsync(req.body)
      const entrance = await Entrance.findOne({ _id: req.params.id })
      entrance.overwrite(result);
      const savedEntrance = await entrance.save();
      
      res.send(savedEntrance)
    } catch (error) {
      next(error)
    }
  },

};
