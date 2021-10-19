const express = require('express');
const router = express.Router();
const EntranceDetailController = require('../Controllers/EntranceDetail.Controller');


router.post('/', EntranceDetailController.create);

router.get('/', EntranceDetailController.getAll);

router.delete('/:id', EntranceDetailController.delete);

router.put('/:id', EntranceDetailController.update);

router.get('/:id', EntranceDetailController.getOne);

module.exports = router;
