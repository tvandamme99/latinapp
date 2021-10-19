const express = require('express');
const router = express.Router();
const FormulaController = require('../Controllers/Formula.Controller');


router.post('/', FormulaController.create);

router.get('/', FormulaController.getAll);

router.delete('/:name', FormulaController.delete);

router.put('/:name', FormulaController.update);

router.get('/:name', FormulaController.getOne);

module.exports = router;
