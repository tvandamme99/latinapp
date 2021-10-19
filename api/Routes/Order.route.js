const express = require('express');
const router = express.Router();
const OrderController = require('../Controllers/Order.Controller');


router.post('/', OrderController.create);

router.get('/', OrderController.getAll);

router.delete('/:id', OrderController.delete);

router.put('/:id', OrderController.update);

router.get('/:id', OrderController.getOne);

module.exports = router;
