const createError = require('http-errors');
const Product = require('../Models/Product.model');
const { ProductSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await ProductSchema.validateAsync(req.body)
      const product = new Product(result)
      const savedProduct = await product.save()
      const resP = {
        "_id": savedProduct._id,
        "name": savedProduct.name,
        "description": savedProduct.description,
        "categoryId": savedProduct.categoryId,
        "capacity": savedProduct.capacity,
        "quantity": savedProduct.quantity,
        "price": savedProduct.price,
      }
      res.send(resP)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const product = await Product.find({})
      res.send({ product })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const product = await Product.findOne({ name: req.params.name })
      res.send(product)
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        Product.findOneAndDelete({ name: req.params.name }, (err, res) => {
        if (err) throw createError.NotFound('Product not found')
      })
      res.status(200).send("Product successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await ProductSchema.validateAsync(req.body)
      const product = await Product.findOne({ name: req.params.name })
      const doesExist = await Product.findOne({ name: result.name })
      if (doesExist)
        throw createError.Conflict(`${result.name} is already registered`)

      product.overwrite(result);
      const savedProduct = await product.save();
      
      res.send(savedProduct)
    } catch (error) {
      next(error)
    }
  },

};