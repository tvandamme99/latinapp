const express = require('express');
const router = express.Router();
const RoleController = require('../Controllers/Role.Controller');


router.post('/', RoleController.create);

router.get('/', RoleController.getAll);

router.delete('/:name', RoleController.delete);

router.put('/:name', RoleController.update);

router.get('/:name', RoleController.getOne);

module.exports = router;
