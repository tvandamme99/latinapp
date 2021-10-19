const createError = require('http-errors');
const Role = require('../Models/Role.model');
const { RoleSchema } = require('../helpers/validation_schema');

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await RoleSchema.validateAsync(req.body)
      const doesExist = await Role.findOne({ name: result.name })
      if (doesExist)
        throw createError.Conflict(`${result.name} is already registered`)
      const role = new Role(result)
      const savedRole = await role.save()
      res.send({ "_id": savedRole._id, "name": savedRole.name })
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      const role = await Role.find({})
      res.send({ role })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      const role = await Role.findOne({ name: req.params.name })
      res.send({ "_id": role._id, "name": role.name })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
      Role.findOneAndDelete({ name: req.params.name }, (err, res) => {
        if (err) throw createError.NotFound('Role not found')
      })
      res.status(200).send("Role successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await RoleSchema.validateAsync(req.body)
      const role = await Role.findOne({ name: req.params.name })
      const doesExist = await Role.findOne({ name: result.name })
      if (doesExist)
        throw createError.Conflict(`${result.name} is already registered`)

      role.overwrite(result);
      const savedRole = await role.save();
      
      res.send({ "_id": savedRole._id, "name": savedRole.name })
    } catch (error) {
      next(error)
    }
  },

};
