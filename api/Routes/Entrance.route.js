const express = require('express');
const router = express.Router();
const EntranceController = require('../Controllers/Entrance.Controller');


router.post('/', EntranceController.create);

router.get('/', EntranceController.getAll);

router.delete('/:id', EntranceController.delete);

router.put('/:id', EntranceController.update);

router.get('/:id', EntranceController.getOne);

module.exports = router;
