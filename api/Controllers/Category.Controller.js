const createError = require('http-errors');
const Category = require('../Models/Category.model');
const { CategorySchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await CategorySchema.validateAsync(req.body)
      const doesExist = await Category.findOne({ name: result.name })
      if (doesExist)
        throw createError.Conflict(`${result.name} is already registered`)
      const category = new Category(result)
      const savedCategory = await category.save()
      res.send({ "_id": savedCategory._id, "name": savedCategory.name, "color": savedCategory.color })
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const category = await Category.find({})
      res.send({ category })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const category = await Category.findOne({ name: req.params.name })
      res.send({ "_id": category._id, "name": category.name, "color": category.color })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        Category.findOneAndDelete({ name: req.params.name }, (err, res) => {
        if (err) throw createError.NotFound('Category not found')
      })
      res.status(200).send("Category successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await CategorySchema.validateAsync(req.body)
      const category = await Category.findOne({ name: req.params.name })
      const doesExist = await Category.findOne({ name: result.name })
      if (doesExist)
        throw createError.Conflict(`${result.name} is already registered`)

      category.overwrite(result);
      const savedCategory = await category.save();
      
      res.send({ "_id": savedCategory._id, "name": savedCategory.name, "color": savedCategory.color })
    } catch (error) {
      next(error)
    }
  },

};
