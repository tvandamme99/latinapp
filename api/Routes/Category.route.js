const express = require('express');
const router = express.Router();
const CategoryController = require('../Controllers/Category.Controller');


router.post('/', CategoryController.create);

router.get('/', CategoryController.getAll);

router.delete('/:name', CategoryController.delete);

router.put('/:name', CategoryController.update);

router.get('/:name', CategoryController.getOne);

module.exports = router;
