const express = require('express');
const router = express.Router();
const EventController = require('../Controllers/Event.Controller');


router.post('/', EventController.create);

router.get('/', EventController.getAll);

router.delete('/:name', EventController.delete);

router.put('/:name', EventController.update);

router.get('/:name', EventController.getOne);

module.exports = router;
