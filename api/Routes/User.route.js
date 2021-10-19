const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/User.Controller');


router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.delete('/logout', UserController.logout);

router.put('/update', UserController.update);

router.delete('/delete', UserController.delete);

router.get('/profil', UserController.getProfil);

module.exports = router;
