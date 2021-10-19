const Joi = require('@hapi/joi')

const RegisterUserSchema = Joi.object({
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  tel: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required()
})

const LoginUserSchema = Joi.object({
  tel: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  password: Joi.string().min(6).required(),
})

const RoleSchema = Joi.object({
  name: Joi.string().required()
})

const CategorySchema = Joi.object({
  name: Joi.string().required(),
  color: Joi.string().required()
})

const FormulaSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required()
})

const EntranceSchema = Joi.object({
  eventId: Joi.string().required(),
  date: Joi.string().required(),
  typePaiement: Joi.string().required(),
  total: Joi.string().required()
})

const EntranceDetailSchema = Joi.object({
  entranceId: Joi.string().required(),
  formulaId: Joi.string().required(),
  quantity: Joi.string().required(),
  total: Joi.string().required()
})

const ProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  categoryId: Joi.string().required(),
  capacity: Joi.string().required(),
  quantity: Joi.string().required(),
  price: Joi.string().required(),
})

const OneEventSchema = Joi.object({
  eventId: Joi.string().required(),
  dateDebut: Joi.string().required(),
  dateFin: Joi.string().required(),
  description: Joi.string().required()
})

const EventSchema = Joi.object({
  name: Joi.string().required(),
  recurrence: Joi.string().required(),
  description: Joi.string().required()
})

const OrderSchema = Joi.object({
  date: Joi.string().required(),
  userId: Joi.string().required(),
  eventId: Joi.string().required(),
  typePaiement: Joi.string().required(),
  total: Joi.string().required()
})

const ProductOrderSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.string().required(),
  orderId: Joi.string().required(),
  total: Joi.string().required(),
})

module.exports = {
  RegisterUserSchema,
  LoginUserSchema,
  RoleSchema,
  CategorySchema,
  FormulaSchema,
  EntranceSchema,
  OneEventSchema,
  ProductSchema,
  EntranceDetailSchema,
  EventSchema,
  OrderSchema,
  ProductOrderSchema
}
