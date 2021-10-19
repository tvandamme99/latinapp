const express = require('express');
const router = express.Router();
const ProductOrderController = require('../Controllers/ProductOrder.Controller');


router.post('/', ProductOrderController.create);

router.get('/', ProductOrderController.getAll);

router.delete('/:id', ProductOrderController.delete);

router.put('/:id', ProductOrderController.update);

router.get('/:id', ProductOrderController.getOne);

module.exports = router;
