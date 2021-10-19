const express = require('express');
const router = express.Router();
const OneEventController = require('../Controllers/OneEvent.Controller');


router.post('/', OneEventController.create);

router.get('/', OneEventController.getAll);

router.delete('/:id', OneEventController.delete);

router.put('/:id', OneEventController.update);

router.get('/:id', OneEventController.getOne);

module.exports = router;
