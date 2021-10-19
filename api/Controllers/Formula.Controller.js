const createError = require('http-errors');
const Formula = require('../Models/Formula.model');
const { FormulaSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await FormulaSchema.validateAsync(req.body)
      const doesExist = await Formula.findOne({ name: result.name })
      if (doesExist)
        throw createError.Conflict(`${result.name} is already registered`)
      const formula = new Formula(result)
      const savedFormula = await formula.save()
      res.send({ "_id": savedFormula._id, "name": savedFormula.name, "description": savedFormula.description, "price": savedFormula.price })
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const formula = await Formula.find({})
      res.send({ formula })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const formula = await Formula.findOne({ name: req.params.name })
      res.send({ "_id": formula._id, "name": formula.name, "description": formula.description, "price": formula.price })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
        Formula.findOneAndDelete({ name: req.params.name }, (err, res) => {
        if (err) throw createError.NotFound('Formula not found')
      })
      res.status(200).send("Formula successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await FormulaSchema.validateAsync(req.body)
      const formula = await Formula.findOne({ name: req.params.name })
      const doesExist = await Formula.findOne({ name: result.name })
      if (doesExist)
        throw createError.Conflict(`${result.name} is already registered`)

      formula.overwrite(result);
      const savedFormula = await formula.save();
      
      res.send({ "_id": savedFormula._id, "name": savedFormula.name, "description": savedFormula.description, "price": savedFormula.price })
    } catch (error) {
      next(error)
    }
  },

};
