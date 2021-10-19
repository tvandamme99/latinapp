const createError = require('http-errors');
const Order = require('../Models/Order.model');
const { OrderSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await OrderSchema.validateAsync(req.body)
      const order = new Order(result)
      const savedOrder = await order.save()
      res.send(savedOrder)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const order = await Order.find({})
      res.send({ order })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const savedOrder = await Order.findOne({ _id: req.params.id })
      const resP = {
        "_id": savedOrder._id,
        "date": savedOrder.date,
        "userId": savedOrder.userId,
        "eventId": savedOrder.eventId,
        "typePaiement": savedOrder.typePaiement,
        "total": savedOrder.total,
      }
      res.send(resP)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        Order.findOneAndDelete({ _id: req.params._id }, (err, res) => {
        if (err) throw createError.NotFound('Order not found')
      })
      res.status(200).send("Order successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await OrderSchema.validateAsync(req.body)
      const order = await Order.findOne({ _id: req.params.id })
      order.overwrite(result);
      const savedOrder = await order.save();
      
      res.send(savedOrder)
    } catch (error) {
      next(error)
    }
  },

};