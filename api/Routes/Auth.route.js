const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/User.Controller')

router.post('/register', UserController.register)

router.post('/login', UserController.login)

router.post('/refresh-token', UserController.refreshToken)

module.exports = router