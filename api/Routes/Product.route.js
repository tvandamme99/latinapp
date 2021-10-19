const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/Product.Controller');


router.post('/', ProductController.create);

router.get('/', ProductController.getAll);

router.delete('/:name', ProductController.delete);

router.put('/:name', ProductController.update);

router.get('/:name', ProductController.getOne);

module.exports = router;
