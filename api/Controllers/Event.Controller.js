const createError = require('http-errors');
const Event = require('../Models/Event.model');
const { EventSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await EventSchema.validateAsync(req.body)
      const event = new Event(result)
      const savedEvent = await event.save()

      res.send(savedEvent)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const event = await Event.find({})
      res.send({ event })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const event = await Event.findOne({ name: req.params.name })
      res.send(event)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        Event.findOneAndDelete({ name: req.params.name }, (err, res) => {
        if (err) throw createError.NotFound('Event not found')
      })
      res.status(200).send("Event successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await EventSchema.validateAsync(req.body)
      const event = await Event.findOne({ name: req.params.name })
      event.overwrite(result);
      const savedEvent = await event.save();
      
      res.send(savedEvent)
    } catch (error) {
      next(error)
    }
  },

};