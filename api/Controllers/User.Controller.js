const createError = require('http-errors');
const User = require('../Models/User.model');
const { LoginUserSchema, RegisterUserSchema } = require('../helpers/validation_schema');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../helpers/jwt_helper');
const client = require('../helpers/init_redis');
const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res, next) => {
    try {
      const result = await RegisterUserSchema.validateAsync(req.body)
      const doesExist = await User.findOne({ email: result.email })
      if (doesExist)
        throw createError.Conflict(`${result.email} is already been registered`)
      const doesExist2 = await User.findOne({ tel: result.tel })
      if (doesExist2)
        throw createError.Conflict(`${result.tel} is already been registered`)
      const user = new User(result)
      const savedUser = await user.save()
      const accessToken = await signAccessToken(savedUser.id)
      const refreshToken = await signRefreshToken(savedUser.id)
      res.send({ accessToken, refreshToken })
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  login: async (req, res, next) => {
    try {
      const result = await LoginUserSchema.validateAsync(req.body)
      const user = await User.findOne({ tel: result.tel })
      if (!user) throw createError.NotFound('User not registered')

      const isMatch = await user.isValidPassword(result.password)
      if (!isMatch)
        throw createError.Unauthorized('Tel/password not valid')

      const accessToken = await signAccessToken(user.id)
      const refreshToken = await signRefreshToken(user.id)

      res.send({ accessToken, refreshToken })
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest('Invalid Tel/Password'))
      next(error)
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      if (!req.headers['authorization']) throw createError.BadRequest();
      const token = req.headers['authorization'].split(' ')
      const refreshToken = token[1]
      if (!refreshToken) throw createError.BadRequest()
      const userId = await verifyRefreshToken(refreshToken)

      const accessToken = await signAccessToken(userId)
      const refToken = await signRefreshToken(userId)
      res.send({ accessToken: accessToken, refreshToken: refToken })
    } catch (error) {
      next(error)
    }
  },

  logout: async (req, res, next) => {
    try {
      const userId = req.payload.aud
      client.DEL(userId, (err, val) => {
        if (err) {
          console.log(err.message)
          throw createError.InternalServerError()
        }
        res.status(200).send("Logged out")
      })
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {

      const userId = req.payload.aud;

      client.DEL(userId, (err, val) => {
        if (err) {
          console.log(err.message)
          throw createError.InternalServerError()
        }
      })
      User.findByIdAndDelete(userId, (err, res) => {
        if (err) throw createError.NotFound('User not found')
      })
      res.status(200).send("User successfully deleted")
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const userId = req.payload.aud
      const params = await RegisterUserSchema.validateAsync(req.body)

      const oldUser = await User.findById(userId);
      const doesExist = await User.findOne({ tel: req.body.tel })
      if (doesExist && (oldUser.email != req.body.email))
        throw createError.Conflict(`${result.email} is already used`)
      const doesExist2 = await User.findOne({ tel: req.body.tel })
      if (doesExist && (oldUser.tel != req.body.tel))
        throw createError.Conflict(`${result.tel} is already used`)
      const result = await RegisterUserSchema.validateAsync(params)

      const salt = await bcrypt.genSalt(10)
      result.password = await bcrypt.hash(result.password, salt)
      
      oldUser.overwrite(result);
      const savedUser = await oldUser.save();
      
      res.send(savedUser)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  getProfil: async (req, res, next) => {
    try {
      const userId = req.payload.aud
      const user = await User.findById(userId)
      const result = {
        _id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        tel: user.tel,
        email: user.email,
        role: user.role
      }
      res.send(result)
    } catch (error) {
      next(error)
    }
  }
};
