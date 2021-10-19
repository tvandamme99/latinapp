const createError = require('http-errors');
const ProductOrder = require('../Models/ProductOrder.model');
const { ProductOrderSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await ProductOrderSchema.validateAsync(req.body)
      const productOrder = new ProductOrder(result)
      const savedProductOrder = await productOrder.save()
      const resP = {
        "_id": savedProductOrder._id,
        "name": savedProductOrder.name,
        "quantity": savedProductOrder.quantity,
        "orderId": savedProductOrder.orderId,
        "total": savedProductOrder.total,
      }
      res.send(resP)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const productOrder = await ProductOrder.find({})
      res.send({ productOrder })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const productOrder = await ProductOrder.findOne({ _id: req.params.id })
      res.send(productOrder)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        ProductOrder.findOneAndDelete({ _id: req.params.id }, (err, res) => {
        if (err) throw createError.NotFound('ProductOrder not found')
      })
      res.status(200).send("ProductOrder successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await ProductOrderSchema.validateAsync(req.body)
      const productOrder = await ProductOrder.findOne({ _id: req.params.id })
      productOrder.overwrite(result);
      const savedProductOrder = await productOrder.save();
      
      res.send(savedProductOrder)
    } catch (error) {
      next(error)
    }
  },

};